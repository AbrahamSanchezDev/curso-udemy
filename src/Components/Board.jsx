import { Square } from "./Square";
import React from "react";
import { calculateWinner } from "./calculateWinner";

export function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if(!squares.includes(null)){
    status = "DRAW!"
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const size = 3; 
  
  const slots = () => {
    const grid = [];
    const curWin = calculateWinner(squares);
    console.log(curWin)
    for (let i = 0; i < size; i++) {
      const xGrid = [];
      for (let x = 0; x < size; x++) {
        const index = (i *3) + x;
        const winSlot = curWin != null && curWin.includes(index);        
        xGrid.push(<Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} winSlot = {winSlot}/>);
      }
      grid.push(
        <div className="board-row" key={i}>
          {xGrid}
        </div>
      );
    }
    return <>{grid}</>;
  };

  return (
    <>
      <div className="status">{status}</div>
      {slots()}      
    </>
  );
}
