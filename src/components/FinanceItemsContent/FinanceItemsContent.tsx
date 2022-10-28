import { useStore } from "effector-react";
import { ComponentType } from "react";
import cx from "classnames";

import {
  $allExpenses,
  $balance,
} from "../../api/currenceExchangeApi/currenceExchangeApi";
import { $financeItems } from "../../api/financeItemsApi/financeItemsApi";
import { FinanceItem } from "../FinanceItem/FinanceItem";

import styles from "./FinanceItemsContent.module.css";

export const FinanceItemsContent: ComponentType = () => {
  const allExpenses = useStore($allExpenses);
  const balance = useStore($balance);
  const financeItems = useStore($financeItems);

  return (
    <div className={styles.content}>
      <div className={styles.calculatingContent}>
        <p className={styles.text}>Всего трат: {allExpenses}</p>
        <p className={styles.text}>Свободных денег: {balance.toFixed(2)}</p>
      </div>
      {financeItems.length > 0 && (
        <div className={styles.finanseItem}>
          {financeItems.map((el, i) => (
            <FinanceItem
              key={el.id}
              id={el.id}
              category={el.category}
              price={el.price}
              position={i + 1}
            />
          ))}
        </div>
      )}
      {financeItems.length === 0 && (
        <p className={cx(styles.text, styles.alertTitle)}>Добавь трату</p>
      )}
    </div>
  );
};
