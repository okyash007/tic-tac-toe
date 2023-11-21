import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.box}>
      <svg className={styles.svg} viewBox="25 25 50 50">
        <circle className={styles.circle} r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
