import React from "react";
import { Question } from "./Question";

const data = [
  { id: 1, question: "2+2?", answer: 4 },
  { id: 2, question: "5+5?", answer: 10 },
  { id: 3, question: "20-10?", answer: 10 }
];

export const Test = () => {
  const [step, setStep] = React.useState(0);
  const [items, setItems] = React.useState(data);
  const [isPassed, setIsPassed] = React.useState(false);

  const handleIncrease = () => setStep(prevStep => prevStep + 1);
  const handleDecrease = () => setStep(prevStep => prevStep - 1);
  const handlePassTest = () => setIsPassed(true);

  React.useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div>
      {!isPassed ? (
        <>
          <Question item={{ ...data[step] }} />
          <button onClick={handleDecrease}>Назад</button>
          <button onClick={handleIncrease}>Вперед</button>
        </>
      ) : (
        <>
          <div>
            {items.map(i => (
              <div> {i.question}</div>
            ))}
          </div>
        </>
      )}
      <button onClick={handlePassTest}>Сдать тест</button>
    </div>
  );
};
