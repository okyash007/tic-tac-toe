import React, { useState, useEffect } from "react";
import styles from "./play.module.css";
import { GridButton } from "../styled";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { useDispatch } from "react-redux";
import { setChance, setModal, setWinner } from "../store/appSlice";

const Grid = ({ chance, winner }) => {
  const dispatch = useDispatch();

  const [buttons, setButtons] = useState(Array(9).fill(null));

  function changeButton(value, index) {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[index] = value;
      return newButtons;
    });
  }

  function toggleChance() {
    if (chance === cross) {
      dispatch(setChance(circle));
    } else {
      dispatch(setChance(cross));
    }
  }

  function pcChance() {
    let nullIndices = [];
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === null) {
        nullIndices.push(i);
      }
    }
    if (nullIndices.length === 0) {
      console.log("play again");
      dispatch(setModal());
    }
    let randomIndex =
      nullIndices[Math.floor(Math.random() * nullIndices.length)];
    return randomIndex;
  }

  function calcWinner(board) {
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
        dispatch(setWinner(board[a]));
        dispatch(setModal());
        return board[a];
      }
      // else if(  ) {
      //   dispatch(setModal());
      // }
    }
    return null;
  }

  useEffect(() => {
    if (chance === circle) {
      const pcIndex = pcChance();
      changeButton(chance, pcIndex);
      toggleChance();
    }
    calcWinner(buttons);
  }, [chance]);

  return (
    <div className={styles.grid}>
      {buttons.map((m, i) => (
        <GridButton
          key={i}
          onClick={() => {
            if (m === null) {
              changeButton(chance, i);
              toggleChance();
            }
          }}
        >
          {m && <img src={m} alt="" />}
        </GridButton>
      ))}
    </div>
  );
};

export default Grid;
