import { createDomain } from "effector";
import { $financeItems } from "../../api/getFinanceItems";

// Domain
const priceInformDomain = createDomain();

// Store

export const $euro = priceInformDomain.createStore(0);
// export const $indonesianRupiah = priceInformDomain.createStore(0);
export const $accountBalance = priceInformDomain.createStore(0);
export const $allExpenses = priceInformDomain
  .createStore(0)
  .on($financeItems, (_, finItems) => {
    const totalBalance = finItems.reduce((acc: number, el) => {
      acc = Number(el.price) + acc;
      console.log(acc);
      return acc;
    }, 0);
    return totalBalance;
  });
