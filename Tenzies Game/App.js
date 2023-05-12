import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

//Dot instead of numbers
//Number of move counter
//Timer
//Save and compare high score

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [score, setScore] = React.useState({count: 1, startTime: 0, endTime: 0})
    const [highScore, setHighScore] = React.useState(JSON.parse(localStorage.getItem("highScore")) || [])
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log(score)
            setScore(prevScore => ({...prevScore, endTime: Date.now()}))
        }
    }, [dice])
    
        React.useEffect(() => {
            if(!tenzies)
            {
                setScore(prevScore => ({count: 1, startTime: Date.now()}))
            }
    }, [tenzies])
    
    React.useEffect(() => {
            if(tenzies)
            {
                if(!highScore.score||
                ((score.count<=highScore.score)&&(winTime()<=highScore.time)))
                {
                    setHighScore({
                        score: score.count,
                        time: winTime()
                    })
                }
            }
    }, [score])
    
        React.useEffect(() => {
            if(tenzies)
            {
                localStorage.setItem("highScore", JSON.stringify({
                score: score.count,
                time: winTime()
                }))
            }
    }, [highScore])
    
   
    
    function winTime(){
        return Math.floor((score.endTime - score.startTime)/1000)
    }
                

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
                setScore(prevScore => ({...prevScore, count: prevScore.count+1}))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    const scoreShow = 
       
         
         <div className="score-container">
            <h2>Score</h2>
            {`Rolls: ${score.count} - Time: ${winTime()} seconds`}
         </div>
   
    
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            
            {tenzies&&scoreShow}
 
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
            {highScore.score && 
            <h2 className="high-score">High Score</h2>}
            {highScore.score && 
            <div>{highScore.score} Rolls - {highScore.time} Seconds</div>}
        </main>
    )
}