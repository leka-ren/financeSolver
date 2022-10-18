import { createDomain, forward, guard } from "effector";

import { FinanceItemProps } from "../../types/financeItemProps";
import {
  getFinanceItemsEndpoint,
  postFinanceItemEndpoint,
} from "../endponts/apiFinanceItemsEndpoints";
import { pageLoad } from "../pageLoad/pageLoad";

// Domain
const financeItemsDomain = createDomain();

// Events
export const addFinanceItems =
  financeItemsDomain.createEvent<FinanceItemProps>();
export const removeItem = financeItemsDomain.createEvent<string>();

// Effects
export const getFinanceItemsFx = financeItemsDomain.createEffect(
  getFinanceItemsEndpoint
);

export const postFinanceItemFx = financeItemsDomain.createEffect(
  postFinanceItemEndpoint
);

// Store
export const $financeItems = financeItemsDomain
  .createStore<FinanceItemProps[]>([])
  .on(getFinanceItemsFx.doneData, (_, data) => data.data)
  .on(postFinanceItemFx.doneData, (store, newItem) => {
    console.log(newItem);
    //@ts-ignore
    store.push(newItem.data);
    return [...store];
  })
  .on(removeItem, (store, id) => {
    const updatedStore = store.filter((el) => el.id !== id);
    return [...updatedStore];
  });

// Relations
guard({
  clock: pageLoad,
  source: $financeItems,
  filter: (src, _) => !!(src.length === 0),
  target: getFinanceItemsFx,
});

forward({
  from: addFinanceItems,
  to: postFinanceItemFx,
});
