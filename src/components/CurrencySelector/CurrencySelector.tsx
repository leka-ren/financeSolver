import { ComponentType } from "react";

import styles from "./CurrencySelector.module.scss";

interface CurrencySelectorProps {
  currency?: string;
  currentCurrency?: string;
  classNames?: string;
}

export const CurrencySelector: ComponentType<CurrencySelectorProps> = ({
  currency,
}) => {
  return (
    <div className={styles.content}>
      <p className={styles.currencyName}>{currency}</p>
    </div>
  );
};
