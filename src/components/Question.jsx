import { useState } from "react";
import Answer from "./Answer";

const Question = ({ question, onNextClicked }) => {
  const [answers, setAnswers] = useState(question.answers);

  const handleAnswerClick = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].correct = updatedAnswers[index].isCorrect;
    setAnswers(updatedAnswers);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            correct={answer.correct}
            onClick={() => handleAnswerClick(index)}
            text={answer.text}
          ></Answer>
        ))}
      </ul>
      <button onClick={onNextClicked}>Next question</button>
    </div>
  );
};

export default Question;
