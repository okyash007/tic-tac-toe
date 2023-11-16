import React, { useEffect } from "react";
import styles from "./play.module.css";
import { GridButton } from "../styled";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setButtonsRedux,
  setChance,
  setModal,
  setWinner,
} from "../store/appSlice";
import { calcWinner, crossOrCircle, pcChance } from "../helper";

const Grid = ({ chance, initialChance }) => {
  const store = useSelector((store) => store.app);

  const dispatch = useDispatch();

  function changeButtonRedux(value, index) {
    const newButtonsRedux = [...store.buttons];
    newButtonsRedux[index] = value;
    dispatch(setButtonsRedux(newButtonsRedux));
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
      const pcIndex = pcChance(store.buttons);
      changeButtonRedux(chance, pcIndex);
      toggleChance();
    }
  }, [chance]);

  useEffect(() => {
    if (calcWinner(store.buttons) !== null) {
      dispatch(setWinner(calcWinner(store.buttons)));
      dispatch(setModal());
    } else if (pcChance(store.buttons) === "play again") {
      dispatch(setWinner("tie"));
      dispatch(setModal());
    }
  }, [store.buttons]);

  return (
    <div className={styles.grid}>
      {store.buttons.map((m, i) => (
        <GridButton
          key={i}
          onClick={() => {
            if (m === null) {
              changeButtonRedux(chance, i);
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
