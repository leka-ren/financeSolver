import { ComponentType } from "react";
import style from "./Header.module.css";

import cx from "classnames";

export const Header: ComponentType = () => {
  return (
    <div className={style.content}>
      <h1 className={style.text}>Финансовый калькулятор</h1>
      <p className={cx(style.text, style.subtitle)}>прости хоспаде</p>
    </div>
  );
};
