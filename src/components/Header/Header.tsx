import { ComponentType } from "react";

import Logo from "../../images/Logo.svg";

import style from "./Header.module.scss";

export const Header: ComponentType = () => {
  return (
    <div className={style.content}>
      <div className={style.template}>
        <img src={Logo} alt={"logo - Finance Solwer"} className={style.logo} />
        <div className={style.authButtons}>
          <button className={style.button}>LogIn</button>
          <button className={style.button}>SignUp</button>
        </div>
      </div>
    </div>
  );
};
