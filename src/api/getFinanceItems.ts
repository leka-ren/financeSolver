import { createDomain } from "effector";
import connectLocalStorage from "effector-localstorage";

import { FinanceItemProps } from "../types/financeItemProps";

// Domain
const financeItemsDomain = createDomain();

// LocalStorage

export const financeItemsStorage = connectLocalStorage("financeItems").onError(
  (e) => console.error("LOCAL STORAGE PROBLEM:", e)
);

// Events
export const addFinanceItems =
  financeItemsDomain.createEvent<FinanceItemProps>();
export const removeItem = financeItemsDomain.createEvent<string | number>();

// Store
export const $financeItems = financeItemsDomain
  .createStore<FinanceItemProps[]>(financeItemsStorage.init([]))
  .on(addFinanceItems, (store, newItem) => {
    store.push(newItem);
    return [...store];
  })
  .on(removeItem, (store, id) => {
    const updatedStore = store.filter((el) => el.id !== id);
    return [...updatedStore];
  });

// Watcher
$financeItems.watch(financeItemsStorage);

// нужно сделать перевод валюты по сабмиту числа в виду ограниченных попыток запросов
// Сохранять последний результат запроса в сторедж
// Список айтимов в листе расходов так же писать в сторедж
// Добавление и удаление айтимов расходов так же будет делаться через сторедж
