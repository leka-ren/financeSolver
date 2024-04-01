import { ComponentType } from "react";
import style from "./Header.module.scss";

export const Header: ComponentType = () => {
  return (
    <div className={style.content}>
      <h1 className={style.title}>FinanceSolwer</h1>
    </div>
  );
};
