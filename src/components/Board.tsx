import { Square } from "./Square";
import { useState } from 'react';

export const Board = ({ xIsNext, squares, onPlay, history }: { xIsNext: any, squares: any, onPlay: any, history: any }) => {

    // const [squares, setSquares] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);

    const calculateWinner = (squares: any[]) => {
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
            let [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(squares);
    let status;
    if (!squares.includes('X') || !squares.includes('X')) {
        status = 'Let\'s Start?';
    } else if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next: ' + (xIsNext ? 'X' : 'O');
    }

    const handleClick = (i: number, xIsNext: boolean) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
        // setXIsNext(!xIsNext);
        // setSquares(nextSquare);
    }

    return (
        <>
            <h3>{status}</h3>
            <div className="board">
                <div className="row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0, xIsNext)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1, xIsNext)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2, xIsNext)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3, xIsNext)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4, xIsNext)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5, xIsNext)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6, xIsNext)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7, xIsNext)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8, xIsNext)} />
                </div>
                {history}
            </div>
        </>
    );
};