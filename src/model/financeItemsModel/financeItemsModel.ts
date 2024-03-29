import { combine, createDomain, guard } from "effector";

import { FinanceItemProps } from "../../types/financeItemProps";
import {
  deleteFinanceItemsEndpoint,
  getFinanceItemsEndpoint,
  postFinanceItemEndpoint,
} from "../../api/endponts/apiFinanceItemsEndpoints";
import { pageLoad } from "../../api/pageLoad/pageLoad";

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
  .on(addFinanceItems, (store, item) => {
    return [
      ...store,
      {
        ...item,
        id: String(Math.floor(Math.random() * 10000000) + 1),
        date: new Date().toISOString().split("T")[0],
      },
    ];
  })
  .on(deleteFinanceItem, (store, id) => store.filter((el) => el.id !== id))
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

export const $expensesByCategory = combine($financeItems, (expenses) =>
  expenses.reduce((acc, { category, price }) => {
    // @ts-ignore
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {})
);

// Relations
guard({
  clock: pageLoad,
  source: $financeItems,
  filter: (src, _) => !!(src.length === 0),
  target: getFinanceItemsFx,
});

// forward({
//   from: addFinanceItems,
//   to: postFinanceItemFx,
// });

// forward({
//   from: deleteFinanceItem,
//   to: deleteFinanceItemFx,
// });
