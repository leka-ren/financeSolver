import { ComponentType } from "react";
import cx from "classnames";

import DuckPick from "../../images/DuckPickArrow.svg";

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
      </div>
    </div>
  );
};
