import React from "react";
import Answer  from "./Answer";

const Question = ({question:{id,question, answers,selection}, handleSelection}) => {
   return (
      <div>
        <h2>{question}</h2>
        <ul>
          {answers.map((answer) => <Answer key={answer.id} answer={answer} handleSelection={handleSelection} selection={selection} questionId={id} />)}
        </ul>
      </div>
  );
};

export default Question;