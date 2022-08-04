import { useStore } from "effector-react";
import { ComponentType } from "react";
import { $financeItems } from "../../api/getFinanceItems";

import { FinanceItem } from "../FinanceItem/FinanceItem";

import style from "./FinanceList.module.css";

export const FinanceList: ComponentType = () => {
  const financeItems = useStore($financeItems);
  return (
    <div className={style.content}>
      {financeItems.map((el) => (
        <FinanceItem key={el.id} name={el.name} price={el.price} id={el.id} />
      ))}
    </div>
  );
};
