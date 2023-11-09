import React from "react";
import styles from "./quote.module.css";
import { Heading } from "../styled";
import useQuote from "../hooks/useQuote";

const Quote = () => {
  const quote = useQuote("https://api.adviceslip.com/advice");

  if (!quote) {
    return null;
  }

  return (
    <div className={styles.box}>
      <Heading $color="#31C4BE">Quote #{quote.slip.id}</Heading>
      <Heading $color="#F2B237">{quote.slip.advice}</Heading>
    </div>
  );
};

export default Quote;
