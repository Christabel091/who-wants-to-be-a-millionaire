import React, { useState, useEffect } from "react";
import "./Quiz.css";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
const Quiz = ({ data, setStopTime, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnwser, setSelectedAnwser] = useState(null);
  const [clickedAnwser, setClickedAnwser] = useState("answer");
  const [playSound] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  useEffect(() => {
    playSound();
  }, [playSound]);
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };
  const handleClick = (answer) => {
    setSelectedAnwser(answer);
    setClickedAnwser("answer active");
    delay(3000, () =>
      setClickedAnwser(answer.correct ? "answer correct" : "answer wrong")
    );

    delay(4000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(2000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnwser(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStopTime(true);
        });
      }
    });
  };
  return (
    <div className="quiz">
      {/* Conditional rendering to ensure question is not null */}
      {question ? (
        <>
          <div className="questions">{question.question}</div>
          <div className="answers">
            {question?.answers.map((answer, index) => (
              <div
                key={index}
                className={selectedAnwser === answer ? clickedAnwser : "answer"}
                onClick={() => handleClick(answer)}
              >
                {answer.text}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Quiz;
