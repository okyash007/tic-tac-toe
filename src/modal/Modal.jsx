import React from "react";
import styles from "./modal.module.css";
import { ColorButton, Heading } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setModal,
  resetButtons,
  resetScore,
  setChance,
  setInitialChance,
  setLoading,
  setWinner,
} from "../store/appSlice";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { crossOrCircle } from "../helper";

const Modal = () => {
  const store = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              {store.winner === circle && (
                <Heading $color="#F2B237">takes the round</Heading>
              )}
              {store.winner === cross && (
                <Heading $color="#31C4BE">takes the round</Heading>
              )}
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
              dispatch(setModal(false));
              dispatch(resetScore());
              dispatch(resetButtons());
              dispatch(setLoading(false));
              navigate("/");
            }}
          >
            Quit
          </ColorButton>
          {!store.winner ? (
            <ColorButton
              $bgColor="#31C4BE"
              onClick={() => {
                dispatch(setWinner(null));
                dispatch(setModal(false));
                dispatch(resetButtons());
                dispatch(resetScore());
              }}
            >
              Play Again
            </ColorButton>
          ) : (
            <ColorButton
              $bgColor="#31C4BE"
              onClick={() => {
                dispatch(setWinner(null));
                dispatch(setModal(false));
                dispatch(resetButtons());
              }}
            >
              Next round
            </ColorButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
