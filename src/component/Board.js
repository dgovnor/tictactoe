import React from "react";
import Square from "./Square";

const Board = ({ player, handleClick, squares }) => {
  if (!player) {
    return null;
  }

  console.log({ player, squares });
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div className="game">
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
