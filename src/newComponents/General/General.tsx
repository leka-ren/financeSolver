import { ComponentType, useEffect } from "react";

import { pageLoad } from "../../api/pageLoad/pageLoad";
import { FinanceList } from "../../components/FinanceList/FinanceList";
import { Header } from "../Header/Header";
import { Inputs } from "../../components/InputsAddNewItem/InputsAddNewItem";
import { PriceInform } from "../../components/PriceInform/PriceInform";

import style from "./General.module.css";

export const General: ComponentType = () => {
  useEffect(() => {
    pageLoad();
  }, []);

  return (
    <div className={style.page}>
      <Header />
      <Inputs />
      <PriceInform />
      <FinanceList />
    </div>
  );
};
