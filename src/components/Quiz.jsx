import React,{useState} from 'react';
import Questions from './Questions';
import Result from './Result';
import {questions} from '../data/questions';


function Quiz(){
    const[currentquestion,setcurrentquestion]=useState(0);
    const[score,setscore]=useState(0);
    const[finished,setfinished]=useState(false);
  
    

    function handleAnswer(selected){
      if(selected===questions[currentquestion].answer){
        setscore(score+1);
      }
      
      const next=currentquestion+1;
        if(next<questions.length){
          setcurrentquestion(next);
        }
        else{
          setfinished(true);
        }
      }


    function restartQuiz(){
      setcurrentquestion(0);
      setscore(0);
      setfinished(false);
    }


    return(
      <div className="maindiv">
          {finished ?(
          <Result 
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}></Result>
          ):(
            <Questions
            question={questions[currentquestion]}
            questionNumber={currentquestion+1}
            total={questions.length}
            handleAnswer={handleAnswer}></Questions>
          )}
      </div>
    );
}
export default Quiz;