import React from 'react'

const Square = ({value, clickSquare}) => {
    return (
        <button className="square" onClick={clickSquare}>
            {value}
        </button>
    )
}

export default Square
