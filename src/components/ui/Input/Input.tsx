import { ComponentType } from "react";
import cx from "classnames";

import styles from "./Input.module.scss";

interface InputProps {
  classNames?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: () => void;
  disabled?: boolean;
  typeInput?: string;
}

const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
  e.currentTarget.blur();
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
};

const Input: ComponentType<InputProps> = ({
  placeholder,
  value,
  onChange,
  typeInput = "text",
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
      type={typeInput}
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
    />
  );
};

export default Input;
