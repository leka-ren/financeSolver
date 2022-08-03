import { createDomain, forward } from "effector";

const inputDomain = createDomain();

const inputPriceSideFx = (price: number | string): number => {
  const clearPrice: number = typeof price === "number" ? price : 0;
  return clearPrice | 0;
};

// Event
export const setInputCategory = inputDomain.createEvent<string>();
export const setInputPrice = inputDomain.createEvent<number | string>();

// Effect
export const setInputPriceFx = inputDomain.createEffect<
  string | number,
  number
>(inputPriceSideFx);

// Store
export const $inputCategory = inputDomain
  .createStore<string>("")
  .on(setInputCategory, (_, input) => input);

export const $inputPrice = inputDomain
  .createStore<any>(0)
  .on(setInputPriceFx, (_, input) => input);

// Relations
forward({ from: setInputPrice, to: setInputPriceFx });
