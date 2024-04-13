import { combine, createDomain } from "effector";

import { $financeItems } from "../financeItemsModel/financeItemsModel";

// Const 
export const currencyNames = ["eur", "idr"];

// Domain
const currencyExchangeDomain = createDomain();

// Events
export const getEuro = currencyExchangeDomain.createEvent<string>();
export const setCurrencyFrom = currencyExchangeDomain.createEvent<string[]>();
export const removeCurrencyFrom = currencyExchangeDomain.createEvent<string>();
export const setCurrencyTo = currencyExchangeDomain.createEvent<string[]>();
export const removeCurrencyTo = currencyExchangeDomain.createEvent<string>();
export const getExchange = currencyExchangeDomain.createEvent<string[]>();

// Store
export const $availibleCurrency =
  currencyExchangeDomain.createStore(currencyNames);

export const $euro = currencyExchangeDomain
  .createStore<string>("")
  .on(getEuro, (_, e: any) => e.target.value);

const $idrExchangeRate = currencyExchangeDomain.createStore(17138);

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

export const $balance = combine(
  $idr,
  $allExpenses,
  (idr, expanses) => Number(idr) - expanses
);

export const $currencyFrom = currencyExchangeDomain
  .createStore<string[]>([])
  .on(setCurrencyFrom, (store, currencies) => [...store, ...currencies])
  .on(removeCurrencyFrom, (store, currency) =>
    store.filter((el) => el !== currency)
  );
export const $currencyTo = currencyExchangeDomain
  .createStore<string[]>([])
  .on(setCurrencyTo, (store, currencies) => [...store, ...currencies])
  .on(removeCurrencyTo, (store, currency) =>
    store.filter((el) => el !== currency)
  );
