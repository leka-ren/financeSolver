import { combine, createDomain } from "effector";

import { $financeItems } from "../../api/financeItemsApi/financeItemsApi";

// Domain
const priceInformDomain = createDomain();

// Events
export const getEuro = priceInformDomain.createEvent<string>();

// Store
export const $euro = priceInformDomain
  .createStore<string>("")
  .on(getEuro, (_, e: any) => e.target.value);

const $idrExchangeRate = priceInformDomain.createStore(15202.36);

export const $idr = combine($euro, $idrExchangeRate, (EUR, IDR) =>
  EUR ? ((Number(EUR) * IDR) / 1000000).toFixed(2) : 0
);

export const $allExpenses = combine($financeItems, (financeItems) => {
  const totalBalance = financeItems.reduce((acc: number, el) => {
    acc = Number(el.price) + acc;
    return acc;
  }, 0);
  return totalBalance;
});
