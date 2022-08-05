import { useStore } from "effector-react";
import { ComponentType } from "react";
import cx from "classnames";

import { $allExpenses, $euro, getEuro } from "./PriceInform.model";

import style from "./PriceInform.module.css";

export const PriceInform: ComponentType = () => {
  const allExpenses = useStore($allExpenses);
  const euro = useStore($euro);

  return (
    <div className={style.content}>
      <div className={cx(style.inputContent, style.cashValue, style.item)}>
        <input
          placeholder="сумма"
          className={cx(style.text, style.input)}
          value={euro}
          onChange={(e) => {
            const value = e.currentTarget.value;
            console.log(value);
            if (!isNaN(Number(value))) {
              getEuro(Number(value));
            }
          }}
        />
        <span className={cx(style.text, style.currancyName)}>EUR</span>
      </div>
      <p className={cx(style.text, style.cashValue, style.item)}>
        {allExpenses + " млн"}
      </p>
      <p className={cx(style.text, style.cashValue, style.item)}>
        {10 + " млн"}
      </p>
    </div>
  );
};
