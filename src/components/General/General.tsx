import { ComponentType, useEffect } from "react";

import { pageLoad } from "../../api/pageLoad/pageLoad";
import { FinanceList } from "../../oldComponents/FinanceList/FinanceList";
import { Header } from "../Header/Header";
import { PriceInform } from "../../oldComponents/PriceInform/PriceInform";

import style from "./General.module.css";
import AddNewItem from "../AddNewItem/AddNewItem";

export const General: ComponentType = () => {
  useEffect(() => {
    pageLoad();
  }, []);

  return (
    <div className={style.page}>
      <Header />
      <AddNewItem />
    </div>
  );
};
