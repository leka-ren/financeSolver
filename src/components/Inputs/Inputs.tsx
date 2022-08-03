import { useStore } from "effector-react";
import { ComponentType } from "react";
import cx from "classnames";

import {
  $inputCategory,
  $inputPrice,
  setInputCategory,
  setInputPrice,
} from "./Inputs.model";

import style from "./Inputs.module.css";

export const Inputs: ComponentType = () => {
  const inputCategory = useStore($inputCategory);
  const inputPrice = useStore($inputPrice);

  const categoryInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputCategory(event.currentTarget.value);
  };
  const inputPriceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const price = Number(event.currentTarget.value);
    if (typeof price === "number") {
      setInputPrice(price);
    }
  };

  return (
    <div className={style.content}>
      <input
        className={cx(style.item, style.input)}
        type="text"
        placeholder="категория"
        onChange={categoryInputHandler}
        value={inputCategory}
      />
      <input
        className={cx(style.item, style.input)}
        type="text"
        placeholder="сумма"
        onChange={inputPriceHandler}
        value={inputPrice}
      />
      <button className={cx(style.item, style.button)}>клик</button>
    </div>
  );
};
