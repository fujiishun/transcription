import { useState } from "react";
import { VStack, Spinner } from "@chakra-ui/react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import RecordingButton from "../common/button/RecordingButton";
import { createTranscription, Transcription } from "../../api/transcriptions";

interface CreateTranscriptionProps {
  onRecordingComplete: (transcription: Transcription) => void;
}

const CreateTranscription = ({
  onRecordingComplete,
}: CreateTranscriptionProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      recorder.ondataavailable = (event: BlobEvent) => {
        audioChunks.push(event.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        setIsProcessing(true);
        try {
          const result = await createTranscription(audioBlob);
          onRecordingComplete(result);
        } catch (error) {
          console.error("文字起こし作成中にエラーが発生しました：", error);
        } finally {
          setIsProcessing(false);
          window.location.reload();
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error("録音開始時エラー:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };

  return (
    <VStack spacing={4} align="flex-start">
      {isProcessing ? (
        <Spinner size="lg" color="#0a192f" />
      ) : isRecording ? (
        <RecordingButton
          isRecording={true}
          leftIcon={FaStop}
          onClick={stopRecording}
        >
          録音停止
        </RecordingButton>
      ) : (
        <RecordingButton
          isRecording={false}
          leftIcon={FaMicrophone}
          onClick={startRecording}
        >
          録音開始
        </RecordingButton>
      )}
    </VStack>
  );
};

export default CreateTranscription;
