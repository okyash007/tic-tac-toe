import React from "react";
import styles from "./modal.module.css";
import { ColorButton, Heading } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  closeModal,
  setChance,
  setInitialChance,
  setModal,
  setWinner,
} from "../store/appSlice";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { crossOrCircle } from "../helper";

const Modal = ({ setButtons }) => {
  const store = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // let color = null

  // if (store.winner === circle) {
  //   color = "#F2B237";
  // } else if (store.winner === cross) {
  //   color = "#32C4C3";
  // }

  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <div className={styles.won}>
          {store.winner === store.initialChance && <p>YOU WON!</p>}
          {store.winner === crossOrCircle(store.initialChance) && (
            <p>YOU LOSE!</p>
          )}
        </div>
        <div className={styles.headings}>
          {(!store.winner || store.winner === "tie") && (
            <Heading $color="#F2B237">Do you want to quit ?</Heading>
          )}

          {store.winner && store.winner !== "tie" && (
            <>
              <img src={store.winner} alt="" width={40} />
              <Heading $color="#F2B237">takes the round</Heading>
            </>
          )}
        </div>
        <div className={styles.btns}>
          <ColorButton
            $bgColor="#F2B237"
            onClick={() => {
              dispatch(setChance(null));
              dispatch(setInitialChance(null));
              dispatch(setWinner(null));
              dispatch(closeModal());
              setButtons(Array(9).fill(null));
              navigate("/");
            }}
          >
            Quit
          </ColorButton>
          <ColorButton
            $bgColor="#31C4BE"
            onClick={() => {
              dispatch(setWinner(null));
              dispatch(closeModal());
              setButtons(Array(9).fill(null));
              navigate("/play");
            }}
          >
            Play Again
          </ColorButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
