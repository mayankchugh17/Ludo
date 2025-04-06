import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

    const updateBlue = () =>{
        moves.blue+=1;
        console.log(`Blue is ${moves.blue}`);
        setMoves({...moves})
    };

    const updateGreen = () =>{
        moves.green+=1;
        console.log(`Green is ${moves.green}`);
        setMoves({...moves})
    };

    const updateRed = () =>{
        moves.red+=1;
        console.log(`Red is ${moves.red}`);
        setMoves({...moves})
    };

    const updateYellow = () =>{
        moves.yellow+=1;
        console.log(`Yellow is ${moves.yellow}`);
        setMoves({...moves})
    };

    return (
        <>
            <h1>Ludo Game</h1>
            <h3>Blue : {moves.blue}</h3> 
            <button onClick={updateBlue} style={{ backgroundColor: "blue"}}>+1</button>
            <h3>Green : {moves.green}</h3> 
            <button onClick={updateGreen} style={{ backgroundColor: "green"}}>+1</button>
            <h3>Red : {moves.red}</h3> 
            <button onClick={updateRed} style={{ backgroundColor: "red"}}>+1</button>
            <h3 >Yellow : {moves.yellow}</h3> 
            <button onClick={updateYellow} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
            </>
    );
}