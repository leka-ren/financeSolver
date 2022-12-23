import { useStore } from "effector-react";
import { ComponentType } from "react";
import {
  $euro,
  $idr,
  getEuro,
} from "../../api/currenceExchangeApi/currenceExchangeApi";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { BlockTitle } from "../ui/BlockTitle/BlockTitle";
import Input from "../ui/Input/Input";

import styles from "./CurrencyExchangeInputs.module.scss";

export const CurrencyExchangeInputs: ComponentType = () => {
  const idr = useStore($idr);
  const euro = useStore($euro);

  return (
    <div className={styles.content}>
      <BlockTitle classNames={styles.item} title={"Введите валюту:"} />
      <div className={styles.inputsContent}>
        <div className={styles.inputs}>
          <span className={styles.span}>из:</span>
          <div className={styles.inputContent}>
            <CurrencySelector
              classNames={styles.currencySelector}
              currency={"EUR"}
            />
            <Input
              onChange={getEuro}
              value={euro}
              classNames={styles.input}
              placeholder="Валюта"
              number
            />
          </div>
        </div>
        <div className={styles.inputs}>
          <span className={styles.span}>в:</span>
          <div className={styles.inputContent}>
            <CurrencySelector
              classNames={styles.currencySelector}
              currency={"IDR"}
            />
            <Input
              disabled
              classNames={styles.input}
              placeholder="Сумма"
              value={`${idr} ${idr > 0 ? "млн" : ""}`}
            />
          </div>
        </div>
      </div>
      {/* <button className={styles.button}>
        <p className={styles.buttonText}>+</p>
      </button> */}
    </div>
  );
};
