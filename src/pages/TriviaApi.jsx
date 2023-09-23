import { useEffect, useState } from "react";
import Question from "../components/Question";

const TriviaApi = ({ topic }) => {
  useEffect(() => {
    async function getQuestions() {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const data = await response.json();

      // ide jön az adat formázása
    }
  }, []);

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

export default TriviaApi;
