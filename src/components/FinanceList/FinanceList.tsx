import { useStore } from "effector-react";
import { ComponentType } from "react";

import { FinanceItem } from "../FinanceItem/FinanceItem";
import { $financeItems } from "./FinanceList.model";

import style from "./FinanceList.module.css";

export const FinanceList: ComponentType = () => {
  const financeItems = useStore($financeItems);
  return (
    <div className={style.content}>
      {financeItems.map((el) => (
        <FinanceItem name={el.name} price={el.price} />
      ))}
    </div>
  );
};
