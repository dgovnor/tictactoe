export const HISTORY = [
  {
    squares: Array(9).fill(null),
  },
];

export const STATE = {
  history: HISTORY,
  playerIsNext: true,
  stepNumber: 0,
  player: null,
  winner: null,
};
