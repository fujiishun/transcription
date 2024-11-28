import React, { useState } from "react";
import { createTranscription } from "../../api/transcriptions";

const CreateTranscription = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const audioChunks = [];
      recorder.ondataavailable = (event) => {
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
      console.error("録画開始時にエラーが発生しました：", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
    setIsRecording(false);
  };

  return (
    <div className="text-center">
      {isProcessing ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Processing...</span>
        </div>
      ) : (
        <>
          {isRecording ? (
            <button
              onClick={stopRecording}
              className="btn btn-danger btn-lg my-3"
            >
              録画停止
            </button>
          ) : (
            <button
              onClick={startRecording}
              className="btn btn-primary btn-lg my-3"
            >
              録画開始
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CreateTranscription;
