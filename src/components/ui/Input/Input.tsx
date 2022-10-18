import { ComponentType } from "react";
import cx from "classnames";

import styles from "./Input.module.css";

interface InputProps {
  classNames?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  number?: boolean;
}

const Input: ComponentType<InputProps> = ({
  placeholder,
  value,
  onChange,
  number = false,
  classNames,
}) => {
  return (
    <input
      className={cx(styles.input, classNames)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={number ? "number" : "text"}
    />
  );
};

export default Input;
