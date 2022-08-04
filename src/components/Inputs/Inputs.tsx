import { ComponentType } from "react";
import cx from "classnames";

import { setInputCategory, setInputPrice } from "./Inputs.model";

import style from "./Inputs.module.css";

export const Inputs: ComponentType = () => {
  const categoryInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputCategory(event.currentTarget.value);
  };
  const inputPriceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const price = event.currentTarget.value;
    setInputPrice(price);
  };

  return (
    <div className={style.content}>
      <input
        className={cx(style.item, style.input)}
        type="text"
        placeholder="категория"
        onChange={categoryInputHandler}
      />

      <input
        className={cx(style.item, style.input)}
        type="number"
        placeholder="сумма"
        onChange={inputPriceHandler}
      />

      <button className={cx(style.item, style.button)}>клик</button>
    </div>
  );
};
