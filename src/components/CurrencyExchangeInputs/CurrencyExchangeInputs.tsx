import { useStore } from "effector-react";
import { ComponentType } from "react";
import {
  $euro,
  $idr,
  getEuro,
} from "../../model/currenceExchangeModel/currenceExchangeModel";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import Input from "../ui/Input/Input";

import styles from "./CurrencyExchangeInputs.module.scss";
import { BlockTitle } from "../ui/BlockTitle/BlockTitle";

export const CurrencyExchangeInputs: ComponentType = () => {
  const idr = useStore($idr);
  const euro = useStore($euro);

  return (
    <div className={styles.content}>
      <BlockTitle title="Обмен валюты:" />
      <div className={styles.inputsContent}>
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
        <div className={styles.inputContent}>
          <CurrencySelector
            classNames={styles.currencySelector}
            currency={"IDR"}
          />
          <Input
            disabled
            classNames={styles.input}
            placeholder="Сумма"
            value={`${idr} ${Number(idr) > 0 ? "млн" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};
