import React, { useEffect, useState } from "react";
import {questions} from '../../api/data';
import Question from './Question';
import {Button} from '../../Components';

const Quiz = () => {
   const [data , setData ] = useState([]);
   const [current, setCurrent ] = useState(0);

   useEffect(() => {
      const data  = questions.map((item)=>({...item,selection:null}));
      setData(data);
   }, []);
   
    const question = data[current];
    const index = current+1;
    const total = questions.length;
    const showPrev = index-1 > 0;
    const showNext = index+1 <= questions.length;
    const showDone = data.filter((item)=> item.selection).length === questions.length;

    const handleDone=()=>{
       const correct = data.filter(item =>  item.correct  === item.selection).length;
       alert(`You answered ${correct} answers`)
    }

    const handleSelection=(questionId,answerId)=>{
        const updatedData = data.map(item => {
          if(item.id === questionId){
            item.selection = answerId;
          }
          return item;
        })
        setData(updatedData)
    }

   return (
      <div>
        <div>
          {showPrev && <Button text={'Prev'} handleClick={() => setCurrent(current-1)} />}
          <span >{index} out of {total}</span>
          {showNext && <Button text={"Next"} handleClick={() => setCurrent(current+1)} />}
        </div>
       {question && <Question question={question} handleSelection={handleSelection}/>}
       {showDone && <Button text={"Done"} handleClick={handleDone} />}
      </div>
  );
};

export default Quiz;