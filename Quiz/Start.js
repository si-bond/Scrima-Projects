import React from "react"

export default function Start(props){
       
    return(
        <div className="start-container">
            <h1>Quizzical</h1>
            <h3>Test your knowledge</h3>
            <button onClick={props.start}>Start Quiz</button>
        </div>
    )
}