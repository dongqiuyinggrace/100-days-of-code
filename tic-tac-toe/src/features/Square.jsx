import React from 'react'

const Square = ({value, clickSquare, isWinner}) => {
    const squareStyle = "square" + (isWinner ? " winner" : "");
    return (
        <button className={squareStyle} onClick={clickSquare}>
            {value}
        </button>
    )
}

export default Square
