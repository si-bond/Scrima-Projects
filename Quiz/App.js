import React from "react"
import Start from "./Start"
import Quiz from "./Quiz"

export default function App(){
    
    const [quizData, setQuizData] = React.useState("")
    const [quizStarted, setQuizStarted] = React.useState(false)
    
    function startQuiz(){
        if(quizData){
            setQuizStarted(true)
        }
    }
    
    function endQuiz(){
        setQuizStarted(false)
    }
    
    React.useEffect(function(){
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
        .then(res => res.json())
        .then(data => {

            const formattedData = data.results.map(data => {
                
                const randomPosition = Math.floor((Math.random()*4))  
                const answers = data.incorrect_answers
                
                answers.splice(randomPosition, 0, data.correct_answer)
                
                return {
                    question: data.question, 
                    answers, 
                    correctAnswer:  randomPosition, 
                    selected: null
                }

            })
            setQuizData(formattedData)
        })
    },[])
    
    function selectAnswer(itemNum, ansNum){    
        
        setQuizData(prevQuizData => prevQuizData.map((data,id) =>  {
            return(
                itemNum===id?
                {...data, selected: ansNum}:
                data
            )
        }))  
    }
       
    return(
        <div className="main-container">
            {quizStarted ? 
            <Quiz 
                data={quizData} 
                handleClick={selectAnswer}
                endQuiz={endQuiz}
            /> : <Start start={startQuiz}/>}
        </div>
    )
}