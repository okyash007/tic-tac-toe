import { useDispatch } from "react-redux";
import circle from "./assets/circle.svg";
import cross from "./assets/cross.svg";

export function calcWinner(board) {
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
      return board[a];
    }
  }
  return null;
}

export function pcChance(board) {
  const winningPositions = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // main diagonal
    [2, 4, 6], // anti-diagonal
  ];

  let nullIndices = [];
  let filledIndices = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      nullIndices.push(i);
    } else {
      filledIndices.push(i);
    }
  }

  if (nullIndices.length === 0) {
    return "play again";
  }

  if (filledIndices.length >= 2) {
    for (const positionSet of winningPositions) {
      const [pos1, pos2, pos3] = positionSet;
      if (
        board[pos1] === board[pos2] &&
        board[pos1] !== null &&
        nullIndices.includes(pos3)
      ) {
        return pos3;
      } else if (
        board[pos1] === board[pos3] &&
        board[pos1] !== null &&
        nullIndices.includes(pos2)
      ) {
        return pos2;
      } else if (
        board[pos2] === board[pos3] &&
        board[pos2] !== null &&
        nullIndices.includes(pos1)
      ) {
        return pos1;
      }
    }
  }

  const randomIndex =
    nullIndices[Math.floor(Math.random() * nullIndices.length)];
  return randomIndex;
}

export function crossOrCircle(input) {
  if (input === cross) {
    return circle;
  } else if (input === circle) {
    return cross;
  }
}
