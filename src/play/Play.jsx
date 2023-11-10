import React, { useState } from "react";
import styles from "./play.module.css";
import Grid from "./Grid";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import refresh from "../assets/refresh.svg";
import { Refresh } from "../styled";
import { useSelector } from "react-redux";
import Modal from "../modal/Modal";

const Play = () => {
  const store = useSelector((store) => store.app);
  const modal = store.modal;

  return (
    <>
      {modal && <Modal img={circle} />}

      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <img src={cross} alt="" />
            <img src={circle} alt="" />
          </div>
          <div className={styles.turn}>
            <h3>TURN</h3>
          </div>
          <Refresh>
            <img src={refresh} alt="" />
          </Refresh>
        </div>
        <Grid chance={store.chance} winner={store.winner} />
      </div>
    </>
  );
};

export default Play;
Play;
