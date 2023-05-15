import React from "react"

export default function Answers(props){
    
    const answerButtons = props.answers.map((ans, id) => {
        
        let answerStyle = "answer"
        
        if(props.quizFinished){
            if(id===props.correct&&id===props.selected)
            {
                answerStyle = "correct-answer"
            } else if (id===props.selected){
                answerStyle = "wrong-answer"
            } else if (id===props.correct){
                answerStyle = "correct-answer"
            }
             
        } else{
            answerStyle = props.selected===id?"selected-answer":"answer"
        }
        
        
        return <button 
                    className={answerStyle} 
                    key={id}
                    onClick={() => props.handleClick(props.questionNumber, id)}
                >
                    {ans}
                </button>
    })
       
    return(
        <div className="answers">
            {answerButtons}
        </div>
    )
}