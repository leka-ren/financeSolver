import { ComponentType } from "react";
import cx from "classnames";

import styles from "./Input.module.css";

interface InputProps {
  classNames?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: () => void;
  number?: boolean;
  disabled?: boolean;
}

const Input: ComponentType<InputProps> = ({
  placeholder,
  value,
  onChange,
  number = false,
  classNames,
  disabled = false,
}) => {
  return (
    <input
      disabled={disabled}
      className={cx(styles.input, classNames)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={number ? "number" : "text"}
    />
  );
};

export default Input;
