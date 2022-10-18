import { ComponentType } from "react";
import cx from "classnames";

import { setInputCategory, setInputPrice, submit } from "./InputsAddNewItem.model";

import style from "./InputsAddNewItem.module.css";

export const Inputs: ComponentType = () => {
  const categoryInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCategory(e.target.value || '');
  };
  const inputPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value) || 0;
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

      <button className={cx(style.item, style.button)} onClick={() => submit()}>клик</button>
    </div>
  );
};
