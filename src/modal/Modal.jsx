import React from "react";
import styles from "./modal.module.css";
import { Heading } from "../styled";

const Modal = () => {
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <Heading $color="#F2B237">Do you want to quit ?</Heading>
      </div>
    </div>
  );
};

export default Modal;
