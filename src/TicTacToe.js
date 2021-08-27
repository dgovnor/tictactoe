import "./App.css";
import React, { useState } from "react";
import { STATE } from "./constant";
import ChoosePlayer from "./component/ChoosePlayer";
import Board from "./component/Board";
import GameInfo from "./component/GameInfo";
import { calculateWinner } from "./utilities/calculateWinner";

const TicTacToe = () => {
  const [gameState, setGameState] = useState(STATE);
  const resetGame = (player) => {
    setGameState({ ...STATE, player: player });
  };

  const setPlayer = (player) => {
    setGameState({
      ...gameState,
      player: player,
    });
  };

  const setMove = (i) => {
    const { stepNumber, player, playerIsNext, winner } = gameState;

    const history = gameState.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    const opponent = player === "X" ? "O" : "X";
    squares[i] = playerIsNext ? player : opponent;

    const hasEmptyIndex = squares.some((s) => {
      return s !== "O" && s !== "X";
    });

    // check if there is a winner or it is a tie?
    let nextWinner = calculateWinner(squares);

    if (!nextWinner && !hasEmptyIndex) {
      nextWinner = "tie";
    }

    setGameState({
      ...gameState,
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      playerIsNext: !playerIsNext,
      winner: nextWinner,
    });
  };
  const { history, stepNumber, playerIsNext, player, winner } = gameState;

  const handleClick = (i) => {
    const { winner } = gameState;

    if (!winner) {
      setMove(i);
    }
  };

  const current = history[stepNumber];

  if (winner) {
    setTimeout(() => {
      resetGame(player);
    }, 2000);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="game-title">
          <h3>Tic Tac Toe</h3>
          <small>A React Game</small>
        </div>
      </div>
      <div className="row">
        <ChoosePlayer
          player={player}
          squares={current.squares}
          onClick={(i) => setPlayer(i)}
        />
        <Board
          player={player}
          squares={current.squares}
          handleClick={(i) => handleClick(i)}
        />
      </div>
      <div className="row">
        <GameInfo player={player} nextPlayer={playerIsNext} winner={winner} />
        <button
          className="btn btn-primary resetCenter"
          onClick={() => resetGame(player)}
        >
          Reset Game
        </button>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default TicTacToe;
