import { ComponentType } from "react";
import { BlockTitle } from "../ui/BlockTitle/BlockTitle";
import cx from "classnames";

import Input from "../ui/Input/Input";
import { setInputCategory, setInputPrice, submit } from "./AddNewItem.model";

import styles from "./AddNewItem.module.css";

const AddNewItem: ComponentType = () => {
  return (
    <div className={styles.content}>
      <BlockTitle classNames={styles.item} title={"Расходы:"} />
      <div className={cx(styles.inputsContent, styles.item)}>
        <Input
          classNames={styles.input}
          onChange={setInputCategory}
          placeholder="Категория"
        />
        <Input
          classNames={styles.input}
          number={true}
          onChange={setInputPrice}
          placeholder="Сумма"
        />
      </div>
      <button
        onClick={() => submit()}
        className={cx(styles.button, styles.item)}
      >
        клик
      </button>
    </div>
  );
};

export default AddNewItem;

/* 
  При клике на кнопку добавления нового элемента дергаем эвент который запустит процесс добавления,
  в этот процесс нужно встроить простое добавление в массив и отправку запроса на сервер,
  элемент на фронте будет добавлен в любом случае, но нужна обрабокта ответа с сервера, если элемент
  был добавлен, то внизу будет всплывашка что элемент добавлен, если будет какая то ошибка, то будет попап
  который будет говорит что на сервере какая то бубуйня, и на фронте элемент есть, но на бэке он не был добавлен.
*/
