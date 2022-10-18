import { createDomain, sample } from "effector";
import { $financeItems } from "../../api/getFinance/getFinanceItems";

// Domain
const financeItemChangeDomain = createDomain();

// Event
export const financeItemPriceChange = financeItemChangeDomain.createEvent();

// Event
export const setChangeMod = financeItemChangeDomain.createEvent();
export const itemPriceChange = financeItemChangeDomain.createEvent<{
  id: string;
  price: string;
}>();
export const itemCategoryChange = financeItemChangeDomain.createEvent<{
  id: string;
  category: string;
}>();

// Store
export const $changeMod = financeItemChangeDomain
  .createStore(true)
  .on(setChangeMod, (store) => !store);

sample({
  clock: itemPriceChange,
  source: $financeItems,
  fn(src, clk) {
    const changedFinanceItems = src.map((el) => {
      if (el.id === clk.id) {
        el.price = clk.price;
      }
      return el;
    });
    return changedFinanceItems;
  },
  target: $financeItems,
});

sample({
  clock: itemCategoryChange,
  source: $financeItems,
  fn(src, clk) {
    const changedFinanceItems = src.map((el) => {
      if (el.id === clk.id) {
        el.category = clk.category;
      }
      return el;
    });
    return changedFinanceItems;
  },
  target: $financeItems,
});
