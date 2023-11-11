import React, { useEffect, useState } from "react";
import styles from "./play.module.css";
import Grid from "./Grid";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import refresh from "../assets/refresh.svg";
import { Refresh } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Modal";
import { setModal } from "../store/appSlice";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const [buttons, setButtons] = useState(Array(9).fill(null));

  const store = useSelector((store) => store.app);
  const modal = store.modal;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.chance && !store.initialChance) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {modal && <Modal setButtons={setButtons} />}
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <img src={cross} alt="" />
            <img src={circle} alt="" />
          </div>
          <div className={styles.turn}>
            <h3>TURN</h3>
          </div>
          <Refresh onClick={() => dispatch(setModal())}>
            <img src={refresh} alt="" />
          </Refresh>
        </div>
        <Grid
          chance={store.chance}
          initialChance={store.initialChance}
          winner={store.winner}
          buttons={buttons}
          setButtons={setButtons}
        />
      </div>
    </>
  );
};

export default Play;
