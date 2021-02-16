import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ progress, step }) => {
  return (
    <div className="container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="label">Вопрос {step + 1}</span>
      </div>
    </div>
  );
};
