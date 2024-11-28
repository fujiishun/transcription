import React from "react";
import TranscriptionCard from "./card";

const TranscriptionList = ({ transcriptions }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">文字起こしリスト</h2>
      <div className="row">
        {transcriptions.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <TranscriptionCard title={`ID: ${item.id}`}>
              <p>
                <strong>Content:</strong> {item.content}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(item.created_at).toLocaleString()}
              </p>
            </TranscriptionCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranscriptionList;
