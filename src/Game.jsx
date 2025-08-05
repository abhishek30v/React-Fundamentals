//this is a simple game to increment the values of individual colors when they are clicked

import { useState } from "react";

export default function Game() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  function incBlue() {
    //ese bhi kar skte hain but callbacks lgana chahiye asynchronous ko handle krne ke lie
    setMoves((prevMoves) => {
      prevMoves.blue += 1;
      console.log("blue count:", moves.blue);
      return { ...prevMoves };
    });
  }

  function incYellow() {
    setMoves((prevMoves) => {
      prevMoves.yellow += 1;
      console.log("yellow count:", moves.yellow);
      return { ...prevMoves };
    });
  }

  function incGreen() {
    setMoves((prevMoves) => {
      prevMoves.green += 1;
      console.log("green count:", moves.green);
      return { ...prevMoves };
    });
  }

  function incRed() {
    setMoves((prevMoves) => {
      prevMoves.red += 1;
      console.log("red count:", moves.red);
      return { ...prevMoves };
    });
  }

  return (
    <div className="Game">
      <h1>Game Begins</h1>

      <p>Blue Count: {moves.blue}</p>
      <button onClick={incBlue} style={{ backgroundColor: "blue" }}>
        +1
      </button>

      <p>Yellow Count: {moves.yellow}</p>
      <button onClick={incYellow} style={{ backgroundColor: "yellow" }}>
        +1
      </button>

      <p>Green Count: {moves.green}</p>
      <button onClick={incGreen} style={{ backgroundColor: "green" }}>
        +1
      </button>

      <p>Red Count: {moves.red}</p>
      <button onClick={incRed} style={{ backgroundColor: "red" }}>
        +1
      </button>
    </div>
  );
}
