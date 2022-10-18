import { ComponentType } from "react";
import cx from "classnames";

import { FinanceItemProps } from "../../types/financeItemProps";

import style from "./FinanceItem.module.css";
import { removeItem } from "../../api/getFinance/getFinanceItems";

export const FinanceItem: ComponentType<FinanceItemProps> = ({
  id,
  category,
  price,
}) => {
  return (
    <div className={cx(style.item)}>
      <button
        className={cx(style.text, style.deleteBtn)}
        onClick={() => id && removeItem(id)}
      ></button>
      <input
        disabled={true}
        className={cx(style.input, style.text)}
        value={category}
      />

      <input
        disabled={true}
        className={cx(style.input, style.text, style.inputNumber)}
        value={price}
      />
    </div>
  );
};
