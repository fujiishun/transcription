from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app.models import Transcription
from app.serializers.transcription.transcription_serializer import TranscriptionSerializer

class TranscriptionListView(APIView):
    """
    Transcription の一覧を取得するビュー
    """
    def get(self, request):
        try:
            # クエリパラメータの取得
            limit = int(request.query_params.get('limit', 12))
            offset = int(request.query_params.get('offset', 0))

            # Transcriptionデータ取得（IDの降順）
            transcriptions = Transcription.objects.all().order_by('id')
            total_count = transcriptions.count()

            paginated_transcriptions = transcriptions[offset:offset + limit]
            serializer = TranscriptionSerializer(paginated_transcriptions, many=True)

            return Response({
                'total': total_count,
                'limit': limit,
                'offset': offset,
                'results': serializer.data
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
