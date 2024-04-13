import { ComponentType } from "react";
import cx from "classnames";

import { FinanceItemProps } from "../../types/financeItemProps";
import Trash from "../../images/Trash.svg";

import styles from "./FinanceItem.module.scss";
import { deleteFinanceItem } from "../../model/financeItemsModel/financeItemsModel";

export const FinanceItem: ComponentType<FinanceItemProps> = ({
  id,
  category,
  price,
}) => {
  return (
    <div className={cx(styles.item)}>
      <input
        disabled={true}
        className={cx(styles.input, styles.text)}
        value={category}
      />
      <input
        disabled={true}
        className={cx(styles.input, styles.text, styles.inputNumber)}
        value={price}
      />
      <button
        className={cx(styles.item, styles.button)}
        onClick={() => id && deleteFinanceItem(id)}
      >
        <img src={Trash} alt={"delete button"} />
      </button>
    </div>
  );
};
