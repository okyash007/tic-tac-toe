import React, { useEffect, useState } from "react";
import styles from "./play.module.css";
import Grid from "./Grid";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import refresh from "../assets/refresh.svg";
import { Refresh } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Modal";
import {
  incLose,
  incTies,
  incWins,
  setButtonsRedux,
  setModal,
} from "../store/appSlice";
import { useNavigate } from "react-router-dom";
import { crossOrCircle } from "../helper";
import Loading from "../modal/Loading";

const Play = () => {
  const store = useSelector((store) => store.app);
  const modal = store.modal;
  const loading = store.loading;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.chance && !store.initialChance) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (store.winner) {
      if (store.winner === store.initialChance) {
        dispatch(incWins());
      } else if (store.winner === crossOrCircle(store.initialChance)) {
        dispatch(incLose());
      } else if (store.winner === "tie") {
        dispatch(incTies());
      }
    }
  }, [store.winner]);

  return (
    <>
      {modal && <Modal />}
      {(loading && !store.winner) && <Loading />}
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <img src={cross} alt="" />
            <img src={circle} alt="" />
          </div>
          <div className={styles.turn}>
            <h3> {store.chance === circle ? "〇" : "✖ "} TURN</h3>
          </div>
          <Refresh onClick={() => dispatch(setModal(true))}>
            <img src={refresh} alt="" />
          </Refresh>
        </div>
        <Grid
          chance={store.chance}
          initialChance={store.initialChance}
          winner={store.winner}
        />
        <div className={styles.bottom}>
          <div className={styles.win}>
            <p>
              {store.initialChance === cross && "X"}{" "}
              {store.initialChance === circle && "O"} (YOU)
            </p>
            <p className={styles.score}>{store.score.wins}</p>
          </div>
          <div className={styles.tie}>
            <p>TIES</p>
            <p className={styles.score}>{store.score.ties}</p>
          </div>
          <div className={styles.lose}>
            <p>
              {store.initialChance === cross && "O"}{" "}
              {store.initialChance === circle && "X"}(CPU)
            </p>
            <p className={styles.score}>{store.score.lose}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
