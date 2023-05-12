import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
     
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {/*<h2 className="die-num">{props.value}</h2>*/}
            <div className="die-dot die-dot-top-left" style={
                    (props.value===2||props.value===3||props.value===4||props.value===5||props.value===6)
                    ?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
            <div className="die-dot die-dot-top-right" style={
                    (props.value===4||props.value===5||props.value===6)
                    ?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
            <div className="die-dot die-dot-left" style={
                    (props.value===6)?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
            <div className="die-dot die-dot-centre" style={
                    (props.value===1||props.value===3||props.value===5)
                    ?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
            <div className="die-dot die-dot-right" style={
                    (props.value===6)?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
            <div className="die-dot die-dot-bottom-left" style={
                    (props.value===4||props.value===5||props.value===6)
                    ?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
            <div className="die-dot die-dot-bottom-right" style={
                    (props.value===2||props.value===3||props.value===4||props.value===5||props.value===6)
                    ?{backgroundColor: "black"}:{backgroundColor: "transparent"}}>
            </div>
        </div>
    )
}