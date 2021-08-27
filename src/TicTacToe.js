import "./App.css";
import React, { useState } from "react";
import { STATE } from "./constant";
import ChoosePlayer from "./component/ChoosePlayer";
import Board from "./component/Board";
import GameInfo from "./component/GameInfo";

const TicTacToe = () => {
  const [gameState, setGameState] = useState(STATE);

  const { history, stepNumber, playerIsNext, player, winner } = gameState;

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
          squares=""
          onClick={(i) => console.log(i)}
        />
        <Board player={player} squares="" onClick={(i) => console.log(i)} />
      </div>
      <div className="row">
        <GameInfo
          stepNumber={stepNumber}
          player={player}
          playerIsNext={playerIsNext}
          history={history}
          winner={winner}
          onClick={(move) => this.jumpTo(move)}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
