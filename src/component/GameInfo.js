const GameInfo = ({ player, nextPlayer, winner }) => {
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (player) {
    const opponent = player === "X" ? "O" : "X";
    status = "Next player: " + (nextPlayer ? player : opponent);
  } else {
    status = "Select X or O";
  }

  return (
    <div className="game-info">
      <div>{status}</div>
    </div>
  );
};
export default GameInfo;
