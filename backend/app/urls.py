from django.urls import path
from app.views.transcription.transcriptionList_view import TranscriptionListView

urlpatterns = [
    path('api/transcriptionList/', TranscriptionListView.as_view(), name='transcription-list'),
]
