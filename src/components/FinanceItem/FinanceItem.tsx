import { ComponentType, useState } from "react";
import cx from "classnames";

import { FinanceItemProps } from "../../types/financeItemProps";

import style from "./FinanceItem.module.css";
import { itemNameChange, itemPriceChange } from "./FinanceItem.model";

export const FinanceItem: ComponentType<FinanceItemProps> = ({
  id,
  name,
  price,
}) => {
  const [changeMod, setChangeMod] = useState(true);

  const changeItemPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemChangeData = {
      id,
      price: Number(e.target.value),
    };
    itemPriceChange(itemChangeData);
  };
  const changeItemNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemChangeData = {
      id,
      name: e.target.value || "",
    };
    itemNameChange(itemChangeData);
  };
  return (
    <div
      onDoubleClick={() => setChangeMod(false)}
      className={cx(style.item, !changeMod && style.inputActive)}
    >
      <input
        disabled={changeMod}
        className={cx(style.input, style.text)}
        onChange={changeItemNameHandler}
        type="text"
        value={name}
      />
      <input
        disabled={changeMod}
        className={cx(style.input, style.text)}
        onChange={changeItemPriceHandler}
        type="number"
        value={price}
      />
    </div>
  );
};
