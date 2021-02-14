import React from "react";

export const Question = ({ item, onChangeIsFilled, onUserAnswer }) => {
  // const isValid = item.answer.toLowerCase() === userAnswer.toLowerCase();

  const handleInputChange = e => {
    onUserAnswer(e.target.value);

    onChangeIsFilled({ [item.id]: !!e.target.value });
  };

  return (
    <div>
      {item.question}
      <div>
        <input onChange={handleInputChange} type="text" />
      </div>
    </div>
  );
};
