import { useStore } from "effector-react";
import { ComponentType } from "react";
import { $allExpenses } from "./PriceInform.model";

import style from "./PriceInform.module.css";

export const PriceInform: ComponentType = () => {
  const allExpenses = useStore($allExpenses);
  return (
    <div className={style.content}>
      <input className={style.input} value={3000 + " EUR"} />
      <input className={style.input} value={allExpenses + " млн"} />
      <input className={style.input} value={10 + " млн"} />
    </div>
  );
};
