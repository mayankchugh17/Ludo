import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0, red:0, green:0, yellow:0})

    const updateBlue = () =>{
        setMoves({...moves, blue: moves.blue += 1});
    }

    const updateGreen = () =>{
        setMoves({...moves, green: moves.green += 1});
    }

    const updateRed = () =>{
        setMoves({...moves, red: moves.red += 1});
    }

    const updateYellow = () =>{
        setMoves({...moves, yellow: moves.yellow += 1});
    }

    return (
        <>
            <h3>Game Begins</h3>
            <div className="board">
                <p>Blue moves = {moves.blue}&nbsp;&nbsp;
                    <button style={{backgroundColor:"Blue"}} onClick={updateBlue}>+1</button>
                </p>
                <p>Red moves = {moves.red}&nbsp;&nbsp;
                    <button style={{backgroundColor:"Red"}} onClick={updateRed}>+1</button>
                </p>
                <p>Green moves = {moves.green}&nbsp;&nbsp;
                    <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                </p>
                <p>Yellow moves = {moves.yellow} &nbsp;&nbsp;
                    <button style={{backgroundColor:"yellow", color:"Black"}} onClick={updateYellow}>+1</button>
                </p>
            </div>
        </>
    );
}