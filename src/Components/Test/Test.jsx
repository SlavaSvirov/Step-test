import React from "react";
import { Question } from "./Question/Question";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import styles from "./Test.module.css";

const data = [
  { id: 1, question: "2+2?", answer: 4, userAnswer: "" },
  { id: 2, question: "5+5?", answer: 10, userAnswer: "" },
  { id: 3, question: "20-10?", answer: 10, userAnswer: "" }
];

const initialItems = data.reduce((acc, el) => {
  return { ...acc, [el.id]: el };
}, {});
const questionWidth = 100 / data.length;

export const Test = () => {
  const [step, setStep] = React.useState(0);
  const [items, setItems] = React.useState(initialItems);
  const [isPassed, setIsPassed] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);

  const handleIncrease = () => setStep(prevStep => prevStep + 1);
  const handleDecrease = () => setStep(prevStep => prevStep - 1);
  const handlePassTest = () => setIsPassed(true);

  const handleGetUserAnswer = userAnswer => {
    setItems({ ...items, ...userAnswer });
  };

  const defineCurrentItem = d => {
    return items[d.id];
  };

  const isAllQuestionsAnswer = Object.keys(items).every(
    item => !!items[item].userAnswer
  );

  const allAnswersWidth = Object.keys(items).reduce((acc, item) => {
    return items[item].userAnswer ? acc + questionWidth : acc;
  }, 0);

  return (
    <div className={styles.container}>
      {!isPassed ? (
        <>
          <ProgressBar progress={allAnswersWidth} step={step} />
          {data.map((d, idx) => (
            <>
              {idx === step && (
                <Question
                  onUserAnswer={handleGetUserAnswer}
                  item={defineCurrentItem(d)}
                />
              )}
            </>
          ))}

          {!!step && <button onClick={handleDecrease}>Назад</button>}
          {step !== data.length - 1 && (
            <button onClick={handleIncrease}>Вперед</button>
          )}
        </>
      ) : (
        <div>
          {data.map(d => {
            const currentItem = defineCurrentItem(d);
            const textPrefix = `Ваш ответ: ${currentItem.userAnswer}, `;
            const isRight = currentItem.answer == currentItem.userAnswer;
            return (
              <div>
                <div> {currentItem.question} </div>
                <div className={isRight ? styles.right : styles.wrong}>
                  {textPrefix}
                  {isRight
                    ? "правильно"
                    : `не правильно, правильный ответ ${currentItem.answer}`}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isAllQuestionsAnswer && (
        <button onClick={handlePassTest}>Проверить ответы</button>
      )}
    </div>
  );
};

// После того, как пользователь ответит на все вопросы, должна появится кнопочка 'проверить ответы'. По нажатию на эту кнопочку нужно вывести все вопросы на экран, под вопросами должно быть следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
