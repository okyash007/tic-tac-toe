
export function calcWinner(board, fn) {
  const winCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // main diagonal
    [2, 4, 6], // anti-diagonal
  ];

  for (let i = 0; i < winCombos.length; i++) {
    let [a, b, c] = winCombos[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      fn();
      return board[a];
    }
  }
  return null;
}
