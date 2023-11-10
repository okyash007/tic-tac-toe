import React from "react";
import styles from "./modal.module.css";
import { Heading } from "../styled";
import { useSelector } from "react-redux";

const Modal = () => {
  const store = useSelector((store) => store.app);

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
      </div>
    </div>
  );
};

export default Modal;
