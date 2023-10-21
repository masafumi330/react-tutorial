import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square({value, onSquereClick}) {
  
  return (
    <button className="square" onClick={onSquereClick}>
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleSquereClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player : " + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquereClick={() => handleSquereClick(0)}/>
        <Square value={squares[1]} onSquereClick={() => handleSquereClick(1)}/>
        <Square value={squares[2]} onSquereClick={() => handleSquereClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquereClick={() => handleSquereClick(3)}/>
        <Square value={squares[4]} onSquereClick={() => handleSquereClick(4)}/>
        <Square value={squares[5]} onSquereClick={() => handleSquereClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquereClick={() => handleSquereClick(6)}/>
        <Square value={squares[7]} onSquereClick={() => handleSquereClick(7)}/>
        <Square value={squares[8]} onSquereClick={() => handleSquereClick(8)}/>
      </div>
    </>
  );
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}