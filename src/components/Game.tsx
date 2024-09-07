import { useState } from 'react';
import { Board } from './Board';

export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares: any[]) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (nextMove: any) => {
        setCurrentMove(nextMove);
    };

    const moves = history.map((squares, move) => {
        let description = '';
        if (move > 0) {
            description = (move + 1) + '. Go to move' + move;
        } else {
            description = '1. Go to game start'
        }

        return (
            <div key={move} className="row" onClick={() => jumpTo(move)}>
                <p>{description}</p>
            </div>
        );
    });

    let historyWrapper = (
        <div className="history">
            {moves}
        </div>
    );

    return (
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} history={historyWrapper} />
    );
};