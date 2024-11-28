import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from app.models import Transcription
from app.serializers.transcription.transcription_serializer import TranscriptionSerializer
from pydub import AudioSegment
import whisper

# Whisperモデルをロード（smallモデルを使用）
model = whisper.load_model("small")

class TranscriptionCreateView(APIView):
    """
    音声データを受け取り、文字起こしを行うエンドポイント
    """
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        audio_file = request.FILES.get("audio")
        if not audio_file:
            return Response({"error": "No audio file provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # 一時的にファイルを保存
            temp_file_path = f"/tmp/{audio_file.name}"
            with open(temp_file_path, "wb") as f:
                for chunk in audio_file.chunks():
                    f.write(chunk)

            # 音声ファイルを WAV に変換（Whisper 互換のため）
            audio = AudioSegment.from_file(temp_file_path)
            wav_path = temp_file_path.replace(".webm", ".wav")
            audio.export(wav_path, format="wav")

            # Whisperを使用して日本語で文字起こしを実行
            result = model.transcribe(
                wav_path,
                language="ja",   # 日本語を指定
                beam_size=5,     # ビームサーチの幅（精度向上）
                best_of=3        # 最良の候補を選択
            )

            transcription = Transcription.objects.create(content=result["text"])

            os.remove(temp_file_path)
            os.remove(wav_path)

            serializer = TranscriptionSerializer(transcription)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
