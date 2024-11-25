import React, { useEffect, useState } from "react";
import { fetchTranscriptionList } from "../api/transcriptions";
import TranscriptionList from "../components/transcriptions/transcriptionList";

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

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  return (
    <div>
      <TranscriptionList transcriptions={transcriptions} />
    </div>
  );
};

export default TOP;
