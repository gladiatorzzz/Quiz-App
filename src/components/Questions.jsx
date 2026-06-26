function Questions({question,questionNumber,total,handleAnswer}){
    return(
        <div>
            <h2>Question {questionNumber}/{total}</h2>

            <h3>{question.question}</h3>

            <h3>{question.options.map((option)=>(
                <button key={option} onClick={()=>handleAnswer(option)}>{option}</button>))}</h3>
        </div>
    );
}

export default Questions;