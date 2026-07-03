import React, { useState } from 'react';
import Square from './Square';

function Board(props) {

    // O, X 상태를 변경하는 변수
    const [isO, setIsO] = useState(true);

    function changeIsO() {
        setIsO(!isO);
    }

    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(index) {
        const nextSquares = squares.slice();
        if (isO) {
            nextSquares[index] = "O";
        } else {
            nextSquares[index] = "X";
        }
        setSquares(nextSquares);
    }

    // 리셋버튼
    function resetBtn() {
        location.reload();
    }

    return (
        <>
            <button onClick={resetBtn}>Reset</button>
            <hr />
            <div className="board-row"> 
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} changeIsO={changeIsO} isO={isO} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} changeIsO={changeIsO} isO={isO} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} changeIsO={changeIsO} isO={isO} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} changeIsO={changeIsO} isO={isO} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} changeIsO={changeIsO} isO={isO} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} changeIsO={changeIsO} isO={isO} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} changeIsO={changeIsO} isO={isO} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} changeIsO={changeIsO} isO={isO} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} changeIsO={changeIsO} isO={isO} />
            </div>
        </>
    );
}

export default Board;