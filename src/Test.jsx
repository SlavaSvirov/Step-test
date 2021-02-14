import React from "react";
import { Question } from "./Question";
import "./Test.css";

const data = [
  { id: 1, question: "2+2?", answer: 4 },
  { id: 2, question: "5+5?", answer: 10 },
  { id: 3, question: "20-10?", answer: 10 }
];

const initialAnswers = data.reduce((acc, el) => {
  return { ...acc, [el.id]: false };
}, {});

export const Test = () => {
  const [step, setStep] = React.useState(0);
  const [items, setItems] = React.useState(data);
  const [answers, setAnswers] = React.useState(initialAnswers);
  const [isPassed, setIsPassed] = React.useState(false);
  const [userAnswer, setUserAnswer] = React.useState("");
  console.log(userAnswer);
  const handleIncrease = () => setStep(prevStep => prevStep + 1);
  const handleDecrease = () => setStep(prevStep => prevStep - 1);
  const handlePassTest = () => setIsPassed(true);

  const isDisabled = Object.keys(answers).some(a => {
    return !answers[a];
  });

  const handleChangeIsFilled = questionObj => {
    setAnswers({ ...answers, ...questionObj });
  };

  React.useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div>
      {!isPassed ? (
        <>
          <Question
            onUserAnswer={setUserAnswer}
            onChangeIsFilled={handleChangeIsFilled}
            item={{ ...data[step] }}
          />
          {step !== 0 ? (
            <button onClick={handleDecrease}>Назад</button>
          ) : (
            <div></div>
          )}
          {step !== items.length - 1 ? (
            <button onClick={handleIncrease}>Вперед</button>
          ) : (
            <div></div>
          )}
        </>
      ) : (
        <>
          <div>
            {items.map(i => (
              <div>
                <div> {i.question} </div>
                <div>{userAnswer}</div>
              </div>
            ))}
          </div>
        </>
      )}
      {!isDisabled ? (
        <button onClick={handlePassTest}>Проверить ответы</button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// После того, как пользователь ответит на все вопросы, должна появится кнопочка 'проверить ответы'. По нажатию на эту кнопочку нужно вывести все вопросы на экран, под вопросами должно быть следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
