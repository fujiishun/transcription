import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
};

export default Card;
