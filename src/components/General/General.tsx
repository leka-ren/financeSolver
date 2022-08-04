import { ComponentType } from "react";
import { FinanceList } from "../FinanceList/FinanceList";
import { Header } from "../Header/Header";
import { Inputs } from "../InputsAddNewItem/InputsAddNewItem";
import { PriceInform } from "../PriceInform/PriceInform";

import style from "./General.module.css";

export const General: ComponentType = () => {
  return (
    <div className={style.page}>
      <Header />
      <Inputs />
      <PriceInform />
      <FinanceList />
    </div>
  );
};
