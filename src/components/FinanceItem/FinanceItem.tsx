import { ComponentType } from "react";
import { FinanceItemProps } from "../../types/financeItemProps";

import style from "./FinanceItem.module.css";

export const FinanceItem: ComponentType<FinanceItemProps> = ({
  id,
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
