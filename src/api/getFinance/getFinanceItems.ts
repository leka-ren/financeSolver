import { createDomain, guard } from "effector";

import { FinanceItemProps } from "../../types/financeItemProps";
import { getFinanceItemsEndpoint } from "../endponts/getFinanceItemsEndpoints";
import { pageLoad } from "../pageLoad/pageLoad";

// Domain
const financeItemsDomain = createDomain();

// Events
export const addFinanceItems =
  financeItemsDomain.createEvent<FinanceItemProps>();
export const removeItem = financeItemsDomain.createEvent<string | number>();

// Effects
export const getFinanceItemsFx = financeItemsDomain.createEffect(
  getFinanceItemsEndpoint
);

// Store
export const $financeItems = financeItemsDomain
  .createStore<FinanceItemProps[]>([])
  .on(getFinanceItemsFx.doneData, (_, data) => data.data)
  .on(addFinanceItems, (store, newItem) => {
    store.push(newItem);
    return [...store];
  })
  .on(removeItem, (store, id) => {
    const updatedStore = store.filter((el) => el.id !== id);
    return [...updatedStore];
  });

guard({
  clock: pageLoad,
  source: $financeItems,
  filter: (src, _) => !!(src.length === 0),
  target: getFinanceItemsFx,
});
