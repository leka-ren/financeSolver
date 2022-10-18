import { combine, createDomain, sample } from "effector";
import { addFinanceItems } from "../../api/getFinance/getFinanceItems";
import { FinanceItemProps } from "../../types/financeItemProps";

const addNewItemDomain = createDomain();

// Event
export const submit = addNewItemDomain.createEvent<any>();
export const addNewItem = addNewItemDomain.createEvent<FinanceItemProps>();
export const setInputCategory = addNewItemDomain.createEvent<string>();
export const setInputPrice = addNewItemDomain.createEvent<string>();

// Store
export const $inputCategory = addNewItemDomain
  .createStore<string>("")
  .on(setInputCategory, (_, e: any) => e.target.value);

export const $inputPrice = addNewItemDomain
  .createStore<string>("")
  .on(setInputPrice, (_, e: any) => e.target.value);

const itemsChangeHandler = (
  category: string,
  price: string
): FinanceItemProps => {
  const newItem = {
    category,
    price,
  };

  return newItem;
};

export const $newItemValue = combine(
  $inputCategory,
  $inputPrice,
  itemsChangeHandler
);

sample({
  //@ts-ignore
  clock: submit,
  source: $newItemValue,
  filter: (src, _) => !!(src.category && src.price),
  target: addFinanceItems,
});
