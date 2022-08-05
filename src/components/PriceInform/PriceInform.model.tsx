import { combine, createDomain } from "effector";
import { $financeItems } from "../../api/getFinanceItems";

// Domain
const priceInformDomain = createDomain();

// Events
export const getEuro = priceInformDomain.createEvent<number | string>();

// Store

export const $euro = priceInformDomain
  .createStore<string | number>("")
  .on(getEuro, (_, euro) => euro);

export const $accountBalance = priceInformDomain.createStore(0);

export const $allExpenses = combine($financeItems, (financeItems) => {
  const totalBalance = financeItems.reduce((acc: number, el) => {
    acc = Number(el.price) + acc;
    return acc;
  }, 0);
  return totalBalance;
});
