import { useStore } from "effector-react";
import { ComponentType } from "react";
import { $financeItems } from "../../api/getFinance/getFinanceItems";

import { FinanceItem } from "../FinanceItem/FinanceItem";

import style from "./FinanceList.module.css";

export const FinanceList: ComponentType = () => {
  const financeItems = useStore($financeItems);
  return (
    <div className={style.content}>
      {financeItems.length > 0 ? (
        financeItems.map((el) => (
          <FinanceItem
            key={el.id}
            category={el.category}
            price={el.price}
            id={el.id}
          />
        ))
      ) : (
        <p className={style.discription}>Впиши свою статью расходов</p>
      )}
    </div>
  );
};