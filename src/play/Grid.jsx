import React, { useState } from "react";
import styles from "./play.module.css";
import { GridButton } from "../styled";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import useWinner from "../hooks/useWinner";
import { useDispatch } from "react-redux";
import { setChance } from "../store/appSlice";

const Grid = ({ chance }) => {
  console.log(chance);
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
    }
    let randomIndex =
      nullIndices[Math.floor(Math.random() * nullIndices.length)];
    return randomIndex;
  }

  if (chance === circle) {
    // changeButton(chance, pcChance(chance));
    console.log(pcChance(chance));
    setButtons(chance, pcChance());
    toggleChance();
  }

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
