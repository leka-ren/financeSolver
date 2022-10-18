import { ComponentType } from "react";
import cx from "classnames";

import DuckPick from "../../images/duckPick.svg";

import styles from "./CurrencySelector.module.css";

interface CurrencySelectorProps {
  currency?: string;
  currentCurrency?: string;
  classNames?: string;
}

export const CurrencySelector: ComponentType<CurrencySelectorProps> = ({
  classNames,
  currency,
}) => {

  return (
    <div className={cx(styles.content, classNames)}>
      <div className={styles.selectorContent}>
        <p className={styles.currencyName}>{currency}</p>
        <img
          className={styles.img}
          src={DuckPick}
          alt="arrow for open menu with select currency"
        />
      </div>
    </div>
  );
};
