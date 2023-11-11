import React, { useState, useEffect } from "react";
import styles from "./play.module.css";
import { GridButton } from "../styled";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { setChance, setModal, setWinner } from "../store/appSlice";
import { calcWinner, pcChance } from "../helper";

const Grid = ({ chance, winner, initialChance, buttons, setButtons }) => {
  const dispatch = useDispatch();

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

  function crossOrCircle(input) {
    if (input === cross) {
      return circle;
    } else if (input === circle) {
      return cross;
    }
  }

  useEffect(() => {
    if (chance === crossOrCircle(initialChance)) {
      const pcIndex = pcChance(buttons);
      changeButton(chance, pcIndex);
      toggleChance();
    }
    calcWinner(buttons);
    if (calcWinner(buttons) !== null) {
      dispatch(setWinner(calcWinner(buttons)));
      dispatch(setModal());
    }
    if (pcChance(buttons) === "play again") {
      dispatch(setModal());
    }
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
