import { ComponentType, useEffect } from "react";

import { pageLoad } from "../../api/pageLoad/pageLoad";
import { Header } from "../Header/Header";

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
