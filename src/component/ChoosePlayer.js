import Square from "./Square";
const ChoosePlayer = ({ onClick, player }) => {
  if (player) {
    return null;
  }

  return (
    <div className="game">
      <div className="board-row">
        <Square value="X" onClick={() => onClick("X")} />
        <Square value="O" onClick={() => onClick("O")} />
      </div>
    </div>
  );
};

export default ChoosePlayer;
