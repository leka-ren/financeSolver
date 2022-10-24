import { combine, createDomain } from "effector";

import { $financeItems } from "../../api/financeItemsApi/financeItemsApi";

// Domain
const currencyExchangeDomain = createDomain();

// Events
export const getEuro = currencyExchangeDomain.createEvent<string>();
export const setCurrencyFrom = currencyExchangeDomain.createEvent<string>();
export const setCurrencyTo = currencyExchangeDomain.createEvent<string>();

// Store
export const $euro = currencyExchangeDomain
  .createStore<string>("")
  .on(getEuro, (_, e: any) => e.target.value);

const $idrExchangeRate = currencyExchangeDomain.createStore(15202.36);

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
  .createStore<string>("eur")
  .on(setCurrencyFrom, (_, currency) => currency);
export const $currencyTo = currencyExchangeDomain
  .createStore<string>("eur")
  .on(setCurrencyTo, (_, currency) => currency);

// сделать какой то кейс обработчик по значениям валют в сторе, который будет выбирать способ пересчета валюты
