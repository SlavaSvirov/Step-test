import React from "react";

export const Question = ({ item, onUserAnswer }) => {
  const handleInputChange = e => {
    onUserAnswer({ [item.id]: { ...item, userAnswer: e.target.value } });
  };
  return (
    <div>
      {item.question}
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          value={item.userAnswer}
        />
      </div>
    </div>
  );
};
