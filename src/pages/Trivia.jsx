import { useState } from "react";
import Question from "../components/Question";

const Trivia = ({ topic }) => {
  const questions = [
    {
      id: 1,
      question: "Kérdés1",
      answers: [
        {
          text: "Helyes válasz",
          isCorrect: true,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "Kérdés2",
      answers: [
        {
          text: "Helyes válasz",
          isCorrect: true,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      question: "Kérdés3",
      answers: [
        {
          text: "Helyes válasz",
          isCorrect: true,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
        {
          text: "Helytelen válasz",
          isCorrect: false,
        },
      ],
    },
  ];

  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const startGame = () => {
    setGameStarted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!gameStarted) {
    return (
      <div>
        <h1>Topic: {topic}</h1>
        <button onClick={startGame}>Start</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Topic: {topic}</h1>
      <Question
        question={questions[currentQuestion]}
        onNextClicked={handleNextQuestion}
      />
    </div>
  );
};

export default Trivia;
