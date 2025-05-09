import { ComponentType } from "react";
import cx from "classnames";

import Input from "../ui/Input/Input";
import {
  setInputCategory,
  setInputPrice,
  submit,
} from "../../model/addNewItemModel/addNewItemModel";

import styles from "./AddNewItem.module.scss";
import { BlockTitle } from "../ui/BlockTitle/BlockTitle";

const AddNewItem: ComponentType = () => {
  return (
    <div className={styles.general}>
      <BlockTitle title="Траты:" />
      <div className={styles.content}>
        <Input
          classNames={styles.input}
          onChange={setInputCategory}
          placeholder="Категория"
        />
        <Input
          classNames={styles.input}
          typeInput={"number"}
          onChange={setInputPrice}
          placeholder="Сумма"
        />
        <button
          onClick={() => submit()}
          className={cx(styles.button, styles.item)}
        >
          клик
        </button>
      </div>
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
