import React from "react";
import styles from "./play.module.css";
import Grid from "./Grid";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import refresh from "../assets/refresh.svg";
import { Refresh } from "../styled";

const Play = () => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <img src={cross} alt="" />
          <img src={circle} alt="" />
        </div>
        <div className={styles.turn}>
          <h3>TURN</h3>
        </div>
        <Refresh> <img src={refresh} alt="" /> </Refresh>
      </div>
      <Grid />
    </div>
  );
};

export default Play;
Play;
