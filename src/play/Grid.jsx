import React, { useState, useEffect } from "react";
import styles from "./play.module.css";
import { GridButton } from "../styled";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  incLose,
  incTies,
  incWins,
  setChance,
  setModal,
  setWinner,
} from "../store/appSlice";
import { calcWinner, crossOrCircle, pcChance } from "../helper";

const Grid = ({ chance, winner, initialChance, buttons, setButtons }) => {
  const dispatch = useDispatch();

  const result = calcWinner(buttons);

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

  useEffect(() => {
    if (chance === crossOrCircle(initialChance)) {
      const pcIndex = pcChance(buttons);
      changeButton(chance, pcIndex);
      toggleChance();
    }
  }, [chance]);

  useEffect(() => {
    console.log(calcWinner(buttons));
    if (calcWinner(buttons) !== null) {
      dispatch(setWinner(calcWinner(buttons)));
      dispatch(setModal());
    } else if (pcChance(buttons) === "play again") {
      dispatch(setWinner("tie"));
      dispatch(setModal());
    }
  }, [buttons]);

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
