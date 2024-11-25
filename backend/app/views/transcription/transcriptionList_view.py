from rest_framework.views import APIView
from rest_framework.response import Response
from app.models import Transcription
from app.serializers.transcription.transcription_serializer import TranscriptionSerializer

class TranscriptionListView(APIView):
    """
    Transcription の一覧を取得するビュー
    """
    def get(self, request):
        transcriptions = Transcription.objects.all()
        serializer = TranscriptionSerializer(transcriptions, many=True)
        return Response(serializer.data)
