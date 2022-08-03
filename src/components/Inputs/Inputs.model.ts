import { createDomain } from "effector";

const inputDomain = createDomain();

// const inputPriceSideFx = (store: number, price: number | string): number => {
//   const clearPrice: number =
//     typeof price === "number" && price < 999999999999999 ? price : store;
//   return clearPrice || store;
// };

// Event
export const setInputCategory = inputDomain.createEvent<string>();
export const setInputPrice = inputDomain.createEvent<string>();
export const submit = inputDomain.createEvent();

// Store
export const $inputCategory = inputDomain
  .createStore<string>("")
  .on(setInputCategory, (_, input) => input)
  .reset(submit);

export const $inputPrice = inputDomain
  .createStore<number | string>("")
  .on(setInputPrice, (_, input) => input)
  .reset(submit);
