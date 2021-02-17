import React from "react";
import { Question } from "./Question/Question";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import styles from "./Test.module.css";

const data = [
  {
    id: 1,
    question:
      "Какого цвета был горн, который украл Тед Мосби в сериале 'Как я встретил вашу маму'?",
    answer: "Синий",
    userAnswer: "",
  },
  {
    id: 2,
    question:
      "Коронная фраза Шелдона Купера, из сериала 'Теория большого взрыва', в переводе Кураж-Бамбей?",
    answer: "Бугагашенька",
    userAnswer: "",
  },
  {
    id: 3,
    question:
      "Краткое содержании игры Шелдона: камень, ножницы, бумага, ... , спок?",
    answer: "Ящерица",
    userAnswer: "",
  },
];

const initialItems = data.reduce((acc, el) => {
  return { ...acc, [el.id]: el };
}, {});
const questionWidth = 100 / data.length;

export const Test = () => {
  const [step, setStep] = React.useState(0);
  const [items, setItems] = React.useState(initialItems);
  const [isPassed, setIsPassed] = React.useState(false);

  const handleIncrease = () => setStep((prevStep) => prevStep + 1);
  const handleDecrease = () => setStep((prevStep) => prevStep - 1);
  const handlePassTest = () => setIsPassed(true);

  const handleGetUserAnswer = (userAnswer) => {
    setItems({ ...items, ...userAnswer });
  };

  const defineCurrentItem = (d) => {
    return items[d.id];
  };

  const isAllQuestionsAnswer = Object.keys(items).every(
    (item) => !!items[item].userAnswer
  );

  const allAnswersWidth = Object.keys(items).reduce((acc, item) => {
    return items[item].userAnswer ? acc + questionWidth : acc;
  }, 0);

  const handleReset = () => {
    setStep(0);
    setItems(initialItems);
    setIsPassed(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.testWrapper}>
        {!isPassed ? (
          <>
            <ProgressBar progress={allAnswersWidth} step={step} />
            {data.map((d, idx) => (
              <div key={idx}>
                {idx === step && (
                  <Question
                    onUserAnswer={handleGetUserAnswer}
                    item={defineCurrentItem(d)}
                  />
                )}
              </div>
            ))}

            {!!step && <button onClick={handleDecrease}>Назад</button>}
            {step !== data.length - 1 && (
              <button onClick={handleIncrease}>Вперед</button>
            )}
            {isAllQuestionsAnswer && (
              <button onClick={handlePassTest}>Проверить ответы</button>
            )}
          </>
        ) : (
          <div className={styles.total}>
            {data.map((d, indx) => {
              const currentItem = defineCurrentItem(d);
              const textPrefix = `Ваш ответ: ${currentItem.userAnswer}, `;
              const isRight =
                currentItem.answer.toLowerCase() ===
                currentItem.userAnswer.toLowerCase();
              return (
                <div key={indx}>
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
            <button onClick={handleReset} className={styles.resetBtn}>
              Пройти заново
            </button>

            <div>Тем более все ответы ты уже знаешь!</div>
          </div>
        )}
      </div>
    </div>
  );
};
