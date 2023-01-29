import React from "react";
import './answer.css';

const Answer = ({answer: {id,answer},selection, questionId, handleSelection}) => {
  return (
    <li key={id}>
      <input type="radio"  checked={selection === id} onChange={()=> handleSelection(questionId,id)} />
      {answer}
    </li>
  );
};

export default Answer;