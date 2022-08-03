import { ComponentType } from "react";
import { FinanceItemProps } from "./FinanceItem.types";

import style from "./FinanceItem.module.css";

export const FinanceItem: ComponentType<FinanceItemProps> = ({
  name,
  price,
}) => {
  return (
    <div className={style.item}>
      <p className={style.text}>{name}</p>
      <p className={style.text}>{price}</p>
    </div>
  );
};
