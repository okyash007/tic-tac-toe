import React, { useState } from "react";
import styles from "./play.module.css";
import { GridButton } from "../styled";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import useWinner from "../hooks/useWinner";
import { useDispatch } from "react-redux";
import { setChance } from "../store/appSlice";

const Grid = ({ chance }) => {
  const dispatch = useDispatch();

  const [buttons, setButtons] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function changeButton(value, index) {
    let newButtons = [...buttons];
    newButtons[index] = value;
    setButtons(newButtons);
  }

  function toggleChance() {
    if (chance === circle) {
      dispatch(setChance(cross));
    } else if (chance === cross) {
      dispatch(setChance(circle));
    }
  }

  function pcChance(chance) {
    let nullIndices = [];
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === null) {
        nullIndices.push(i);
      }
    }
    if (nullIndices.length === 0) {
      console.log("play again");
    }
    let randomIndex =
      nullIndices[Math.floor(Math.random() * nullIndices.length)];
    changeButton(chance, randomIndex);
  }

  // if (chance === circle) {
  //   pcChance(chance);
  //   console.log(chance);
  //   toggleChance();
  // }

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
