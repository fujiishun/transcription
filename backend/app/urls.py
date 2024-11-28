from django.urls import path
from app.views.transcription.transcriptionList_view import TranscriptionListView
from app.views.transcription.transcriptionCreate_view import TranscriptionCreateView

urlpatterns = [
    path('api/transcriptionList/', TranscriptionListView.as_view(), name='transcription-list'),
    path("api/transcriptionCreate/", TranscriptionCreateView.as_view(), name="transcription-create"),
]
