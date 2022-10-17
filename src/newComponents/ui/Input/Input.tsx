import { ComponentType } from "react";

import styles from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

const Input: ComponentType<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
