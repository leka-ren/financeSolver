import { ComponentType, useState } from "react";
import cx from "classnames";

import { FinanceItemProps } from "../../types/financeItemProps";

import style from "./FinanceItem.module.css";
import { itemCategoryChange, itemPriceChange } from "./FinanceItem.model";
import { removeItem } from "../../api/getFinance/getFinanceItems";

export const FinanceItem: ComponentType<FinanceItemProps> = ({
  id,
  category,
  price,
}) => {
  const [changeMod, setChangeMod] = useState(true);

  const changeItemPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!isNaN(Number(value))) {
      const itemChangeData = {
        id,
        price: value,
      };
      itemPriceChange(itemChangeData);
    }
  };
  const changeItemNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemChangeData = {
      id,
      category: e.target.value || "",
    };
    itemCategoryChange(itemChangeData);
  };

  return (
    <div
      onDoubleClick={() => setChangeMod(false)}
      className={cx(style.item, !changeMod && style.inputActive)}
    >
      <button
        className={cx(style.text, style.deleteBtn)}
        onClick={() => removeItem(id)}
      >
        D
      </button>
      <input
        disabled={changeMod}
        className={cx(style.input, style.text)}
        onChange={changeItemNameHandler}
        value={category}
      />

      <input
        disabled={changeMod}
        className={cx(style.input, style.text, style.inputNumber)}
        onChange={changeItemPriceHandler}
        value={price}
      />
    </div>
  );
};
