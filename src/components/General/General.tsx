import { ComponentType } from "react";
import { FinanceList } from "../FinanceList/FinanceList";
import { Header } from "../Header/Header";
import { Inputs } from "../Inputs/Inputs";

import style from "./General.module.css";

export const General: ComponentType = () => {
  return (
    <div className={style.page}>
      <Header />
      <Inputs />
      <FinanceList />
    </div>
  );
};
