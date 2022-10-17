import { createDomain, sample } from "effector";
import { addFinanceItems } from "../../api/getFinance/getFinanceItems";

const inputDomain = createDomain();

// Event
export const setInputCategory = inputDomain.createEvent<string>();
export const setInputPrice = inputDomain.createEvent<string | number>();
export const submit = inputDomain.createEvent();

// Store
export const $inputCategory = inputDomain
  .createStore<string>("")
  .on(setInputCategory, (_, input) => input)

export const $inputPrice = inputDomain
  .createStore<number | string>("")
  .on(setInputPrice, (_, input) => Number(input))

sample({
  clock: submit,
  source: { category: $inputCategory, price: $inputPrice },
  fn(src, clk) {
    const newFinanceCategory = {
      id: Math.random().toString(36).substring(2),
      category: src.category,
      price: src.price,
    };

    return newFinanceCategory;
  },
  target: addFinanceItems,
});
