import React from "react";

export const Question = ({ item }) => {
  return (
    <div>
      {item.question}
      <div>
        <input type="text" />
      </div>
    </div>
  );
};
