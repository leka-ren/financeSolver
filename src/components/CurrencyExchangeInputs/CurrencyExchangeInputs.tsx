import { ComponentType } from "react";
import { BlockTitle } from "../ui/BlockTitle/BlockTitle";
import Input from "../ui/Input/Input";

import styles from "./CurrencyExchangeInputs.module.css";

export const CurrencyExchangeInputs: ComponentType = () => {
  return (
    <div className={styles.content}>
      <BlockTitle classNames={styles.item} title={"Введите сумму:"} />
      <div className={styles.inputs}>
        <span className={styles.span}>из:</span>
        <div className={styles.inputContent}>
          <Input classNames={styles.input} placeholder="Сумма" number />
        </div>
      </div>
      <div className={styles.inputs}>
        <span className={styles.span}>в:</span>
        <div className={styles.inputContent}>
          <Input classNames={styles.input} placeholder="Сумма" number />
        </div>
      </div>
      {/* <button className={styles.button}>
        <p className={styles.buttonText}>+</p>
      </button> */}
    </div>
  );
};
