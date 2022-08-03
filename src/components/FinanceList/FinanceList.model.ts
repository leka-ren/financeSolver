import { createDomain } from "effector";

// const fs = require("fs");

export function getFinanceItems() {
  //   let financeJson = fs.readFileSync("../data/financeInfo.json");
  let financeJson = new File([""], "../data/financeInfo.json");
  console.log(financeJson);
  //   let financeItemsParsed = JSON.parse(financeJson);
  const kek = {
    data: [
      { name: "Медстраховка", price: 100 },
      { name: "Домой", price: 100 },
      { name: "Отложить", price: 100 },
      { name: "Визы", price: 100 },
      { name: "Еда", price: 100 },
      { name: "Скутер", price: 100 },
    ],
  };

  //   return financeItemsParsed.data;
  return kek.data;
}

// Domain
const financeListDomain = createDomain();

// Effect
export const addItemInList = financeListDomain.createEvent();

// Store
export const $financeItems = financeListDomain.createStore<
  Array<{
    name: string;
    price: number;
  }>
>(getFinanceItems());
