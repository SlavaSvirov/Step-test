import React from "react";
import styles from "./Question.module.css";

export const Question = ({ item, onUserAnswer }) => {
  const handleInputChange = e => {
    onUserAnswer({ [item.id]: { ...item, userAnswer: e.target.value } });
  };
  return (
    <div className={styles.question}>
      Вопрос {item.id}: {item.question}
      <div className={styles.answerInput}>
        <input
          onChange={handleInputChange}
          type="text"
          value={item.userAnswer}
        />
      </div>
    </div>
  );
};
