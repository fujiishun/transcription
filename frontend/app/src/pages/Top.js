import React, { useEffect, useState } from "react";
import {
  fetchTranscriptionList,
  createTranscription,
} from "../api/transcriptions";
import TranscriptionList from "../components/transcriptions/list";
import CreateTranscription from "../components/transcriptions/create";

const TOP = () => {
  const [transcriptions, setTranscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTranscriptions = async () => {
      try {
        const data = await fetchTranscriptionList();
        setTranscriptions(data);
      } catch (error) {
        setError("Failed to load transcriptions");
      } finally {
        setLoading(false);
      }
    };

    loadTranscriptions();
  }, []);

  const handleRecordingComplete = async (audioBlob) => {
    try {
      const newTranscription = await createTranscription(audioBlob);
      setTranscriptions((prev) => [newTranscription, ...prev]);
    } catch (error) {
      console.error("文字起こし作成中にエラーが発生しました：", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-danger">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <CreateTranscription onRecordingComplete={handleRecordingComplete} />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <TranscriptionList transcriptions={transcriptions} />
      </div>
    </div>
  );
};

export default TOP;
