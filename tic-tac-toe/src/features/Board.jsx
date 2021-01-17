import React from 'react'
import Square from './Square';



const Board = ({squares, click, winnerIndexes}) => {
    return (
        <div id="board">
            {[0, 1, 2].map(row => (
                <div key={row} className="board-row">
                    {
                        [row*3,row*3+1,row*3+2].map(i => 
                            <Square key={i} 
                                value={squares[i]} 
                                clickSquare={() => click(i)} 
                                isWinner={winnerIndexes.includes(i)}
                            />)
                    }
                </div>))
            }
        </div>
        
    )
}

export default Board
