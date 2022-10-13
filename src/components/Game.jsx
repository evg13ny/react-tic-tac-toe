import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helper'
import './Game.css'

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]

        // if square was clicked or game was over
        if (winner || boardCopy[index]) return

        // x or o move
        boardCopy[index] = xIsNext ? 'X' : 'O'

        // update state
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Clear</button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='game_info'>
                {winner ? winner + ' is a winner!' : (xIsNext ? 'X' : 'O') + ' move'}
            </p>
        </div>
    )
}
