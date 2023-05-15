import React from "react"
import Answers from "./Answers"


export default function Quiz(props){
    
    
    const [checkAnswers, setCheckAnswers] = React.useState(false)
    const [quizFinished, setQuizFinished] = React.useState(false)
    const [score, setScore] = React.useState(0)

    const questionHTML = props.data.map((ques, id) => {
        
        let questionAnswered = "question"
        
        if(checkAnswers)
        {
            if(ques.selected===null)
            {
                questionAnswered += " unanswered"//ques.selected ? "questions" : "questions red"
            }
        }

        return  <div className="indiv-ques-container" key={id}>
                    <div className={questionAnswered}>
                        {ques.question}
                    </div>
                    <Answers 
                        answers={ques.answers} 
                        selected={ques.selected}
                        correct={ques.correctAnswer}
                        quizFinished={quizFinished}
                        handleClick={props.handleClick}
                        questionNumber={id}
                    />
            </div>
         
    })
    
    function checkAnswersButton(){
        setCheckAnswers(true)
        
        let  answersIncomplete = false
        props.data.forEach(item => {
            if(item.selected===null){
                answersIncomplete = true
            }
        })
        
        if(answersIncomplete){
            return
        }
        
        setQuizFinished(true)

        let scoreTemp = 0
        props.data.forEach(item => {
            if(item.selected===item.correctAnswer){
                scoreTemp++
            }
        })
        setScore(scoreTemp)        
    }
    

       
    return(
        <div className="question-container">
           {questionHTML}
           {quizFinished ? 
           <div className="finished-container">
                <div className="score-message">
                    You Scored {score}/5 Correct Answers
                </div>
                <button 
                        className="submit-answers-btn"  
                        onClick={props.endQuiz}
                >New Quiz</button>
            </div>:
            <button 
                className="submit-answers-btn"  
                onClick={checkAnswersButton}
           >Check Answers</button>}
        </div>
    )
}