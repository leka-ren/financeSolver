import { ComponentType } from "react";
import style from "./Header.module.scss";

import cx from "classnames";

export const Header: ComponentType = () => {
  return (
    <div className={style.content}>
      <div className={style.template}>
        <h1 className={style.text}>FinanceSolwer</h1>
        <div className={style.authButtons}>
          <button className={cx(style.text, style.button)}>SignUp</button>
          <button className={cx(style.text, style.button)}>LogIn</button>
        </div>
      </div>
    </div>
  );
};
