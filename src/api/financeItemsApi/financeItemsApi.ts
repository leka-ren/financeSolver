import { createDomain, forward, guard } from "effector";

import { FinanceItemProps } from "../../types/financeItemProps";
import {
  deleteFinanceItemsEndpoint,
  getFinanceItemsEndpoint,
  postFinanceItemEndpoint,
} from "../endponts/apiFinanceItemsEndpoints";
import { pageLoad } from "../pageLoad/pageLoad";

// Domain
const financeItemsDomain = createDomain();

// Events
export const addFinanceItems =
  financeItemsDomain.createEvent<FinanceItemProps>();
export const deleteFinanceItem = financeItemsDomain.createEvent<string>();

// Effects
export const getFinanceItemsFx = financeItemsDomain.createEffect(
  getFinanceItemsEndpoint
);

export const postFinanceItemFx = financeItemsDomain.createEffect(
  postFinanceItemEndpoint
);

export const deleteFinanceItemFx = financeItemsDomain.createEffect(
  deleteFinanceItemsEndpoint
);

// Store
export const $financeItems = financeItemsDomain
  .createStore<FinanceItemProps[]>([])
  .on(getFinanceItemsFx.doneData, (_, data) => data.data)
  .on(postFinanceItemFx.doneData, (store, newItem) => {
    store.push(newItem.data);
    return [...store];
  })
  .on(deleteFinanceItemFx.doneData, (store, data) => {
    if (data.data.id) {
      const updatedStore = store.filter((el) => el.id !== data.data.id);
      return [...updatedStore];
    }
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

forward({
  from: deleteFinanceItem,
  to: deleteFinanceItemFx,
});
