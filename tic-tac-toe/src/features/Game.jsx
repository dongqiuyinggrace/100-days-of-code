import React, { useState } from 'react'
import Board from './Board';

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {type: squares[a], };
        }
    }
    return null;
}

const getCoordinate = (index) => {
    const coordinates = [
        {col: 1, row: 1},
        {col: 2, row: 1},
        {col: 3, row: 1},
        {col: 1, row: 2},
        {col: 2, row: 2},
        {col: 3, row: 2},
        {col: 1, row: 3},
        {col: 2, row: 3},
        {col: 3, row: 3}
    ];

    return coordinates[index];
}

const Game = () => {
    const initialHistory = [{squares: Array(9).fill(null), col: 0, row: 0}];
    const [history, setHistory] = useState(initialHistory);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [isASC, setIsASC] = useState(true);

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status = null;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }

    const JumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    }

    const moves = history.map((step, move) => {
        const desc = move ? 'Go to step #' + move + ` (col:${step.col}, row:${step.row}) ` : 'Go to game start';
        return (
            <li key={move}>
                <button  onClick={() => JumpTo(move)} className={move === stepNumber ? 'selectedMove' : ''}>{desc}</button>
            </li>
        );
    })
    
    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber+1);
        const current = newHistory[newHistory.length-1];
        if (calculateWinner(current.squares) || current.squares[i] !== null) {
            return;
        }
        const newSqures = [...current.squares];
        if (xIsNext) {
            newSqures[i] = 'X';
            setXIsNext(false);
        } else {
            newSqures[i] = 'O';
            setXIsNext(true);
        }
        const currentCoord = getCoordinate(i);
        setHistory(newHistory.concat([{squares: newSqures, col: currentCoord.col, row: currentCoord.row}]));
        setStepNumber(newHistory.length);
    }

    

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} click={handleClick} status={status}/>
            </div>
            <div className="game-info">
                <div className="status">{status}</div>
                <button onClick={() => setIsASC(!isASC)}>{isASC? 'ASC': 'DESC'}</button>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game
