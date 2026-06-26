function Result({score,total,restartQuiz}){
   return(
    <div>
        <h1>Quiz Finished!</h1>
        <h2>Result : {score}/{total}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
   );

}

export default Result;