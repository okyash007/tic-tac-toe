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

const Modal = () => {
  const store = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.box}>
      <div className={styles.card}>
        {store.winner ? (
          <>
            <img src={store.winner} alt="" width={25} />
            <Heading $color="#F2B237">takes the round</Heading>
          </>
        ) : (
          <Heading $color="#F2B237">Do you want to quit ?</Heading>
        )}
        <div className={styles.btns}>
          <ColorButton
            $bgColor="#F2B237"
            onClick={() => {
              dispatch(setChance(null));
              dispatch(setInitialChance(null));
              dispatch(setWinner(null));
              dispatch(closeModal());
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
