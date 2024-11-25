import React from "react";
import Card from "./card";

const TranscriptionList = ({ transcriptions }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Transcriptions List</h2>
      <div className="row">
        {transcriptions.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <Card title={`ID: ${item.id}`}>
              <p>
                <strong>Content:</strong> {item.content}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(item.created_at).toLocaleString()}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranscriptionList;
