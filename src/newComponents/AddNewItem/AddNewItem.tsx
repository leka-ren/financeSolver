import { ComponentType } from "react";

import Input from "../ui/Input/Input";

import styles from "./AddNewItem.module.css";

const AddNewItem: ComponentType = () => {
  return (
    <div className={styles.content}>
      <div>
        <p>Расходы</p>
      </div>
      <div>
        <Input placeholder="Категория" />
        <Input placeholder="Сумма" />
      </div>
      <button className={styles.button}>клик</button>
    </div>
  );
};

export default AddNewItem;
