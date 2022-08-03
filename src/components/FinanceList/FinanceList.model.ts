import { createDomain } from "effector";
import { FinanceItemProps } from "../../types/financeItemProps";

export function getFinanceItems() {
  let financeJson = new File([""], "../data/financeInfo.json");
  console.log(financeJson);
  const kek = {
    data: [
      { id: "1", name: "Медстраховка", price: "0" },
      { id: "2", name: "Домой", price: "0" },
      { id: "3", name: "Отложить", price: "0" },
      { id: "4", name: "Визы", price: "0" },
      { id: "5", name: "Еда", price: "0" },
      { id: "6", name: "Скутер", price: "0" },
      { id: "1", name: "Медстраховка", price: "0" },
      { id: "2", name: "Домой", price: "0" },
      { id: "3", name: "Отложить", price: "0" },
      { id: "4", name: "Визы", price: "0" },
      { id: "5", name: "Еда", price: "0" },
      { id: "6", name: "Скутер", price: "0" },
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
export const $financeItems = financeListDomain.createStore<FinanceItemProps[]>(
  getFinanceItems()
);
