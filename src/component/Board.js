import React from "react";
import Square from "./Square";
import { HISTORY } from "../constant";

const Board = ({ player, handleClick }) => {
  if (!player) {
    return null;
  }
  const renderSquare = (i) => {
    return <Square value={HISTORY.squares[i]} onClick={() => handleClick(i)} />;
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
