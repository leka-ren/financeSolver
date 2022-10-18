import { useStore } from "effector-react";
import { ComponentType } from "react";
import cx from "classnames";

import {
  $accountBalance,
  $allExpenses,
  $euro,
  getEuro,
} from "./PriceInform.model";

import style from "./PriceInform.module.css";

export const PriceInform: ComponentType = () => {
  const euro = useStore($euro);
  const allExpenses = useStore($allExpenses).toString();
  const accountBalance = useStore($accountBalance);

  const getCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!isNaN(Number(value))) {
      getEuro(value);
    }
  };

  return (
    <div className={style.content}>
      <div className={cx(style.inputContent, style.cashValue, style.item)}>
        <input
          placeholder="сумма"
          className={cx(style.text, style.input)}
          value={euro}
          onChange={getCurrency}
        />
        <span className={cx(style.text, style.currancyName)}>EUR</span>
      </div>
      <p className={cx(style.text, style.cashValue, style.item)}>
        {allExpenses.substring(0, 6) + " млн"}
      </p>
      <p className={cx(style.text, style.cashValue, style.item)}>
        {accountBalance.toString().substring(0, 5) + " млн"}
      </p>
    </div>
  );
};
