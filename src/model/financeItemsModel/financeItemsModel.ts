import { combine, createDomain, guard } from "effector";

import { FinanceItemProps } from "../../types/financeItemProps";
import { pageLoad } from "../../api/pageLoad/pageLoad";

// Const
const STORAGE_KEY = "expenses";

// Domain
const financeItemsDomain = createDomain();

// Events
export const addFinanceItems =
  financeItemsDomain.createEvent<FinanceItemProps>();

export const deleteFinanceItem = financeItemsDomain.createEvent<string>();

// Effects
// in time while backend in dev
export const getFinanceItemsFxStorage = financeItemsDomain.createEffect(() => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
});

// in time while backend in dev
// export const getFinanceItemsFx = financeItemsDomain.createEffect(
//   getFinanceItemsEndpoint
// );
// export const deleteFinanceItemFx = financeItemsDomain.createEffect(
//   deleteFinanceItemsEndpoint
// );
// export const postFinanceItemFx = financeItemsDomain.createEffect(
//   postFinanceItemEndpoint
// );

// Store
export const $financeItems = financeItemsDomain
  .createStore<FinanceItemProps[]>([])
  .on(getFinanceItemsFxStorage.doneData, (_, items) => {
    return items;
  })
  .on(addFinanceItems, (store, item) => {
    const modifiedStore = [
      ...store,
      {
        ...item,
        id: String(Math.floor(Math.random() * 10000000) + 1),
        date: new Date().toISOString().split("T")[0],
      },
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(modifiedStore));
    return modifiedStore;
  })
  .on(deleteFinanceItem, (store, id) => {
    const modifiedStore = store.filter((el) => el.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(modifiedStore));
    return modifiedStore;
  });

// in time while backend in dev
// .on(deleteFinanceItem, (store, id) => store.filter((el) => el.id !== id))
// .on(postFinanceItemFx.doneData, (store, newItem) => {
//   store.push(newItem.data);
//   return [...store];
// })
// .on(deleteFinanceItemFx.doneData, (store, data) => {
//   if (data.data.id) {
//     const updatedStore = store.filter((el) => el.id !== data.data.id);
//     return [...updatedStore];
//   }
// });

export const $expensesByCategory = combine($financeItems, (expenses) =>
  expenses.reduce((acc, { category, price }) => {
    // @ts-ignore
    acc[category] = (acc[category] || 0) + Number(price);
    return acc;
  }, {})
);

// Relations
guard({
  clock: pageLoad,
  source: $financeItems,
  filter: (src, _) => !!(src.length === 0),
  target: getFinanceItemsFxStorage,
});

// in time while backend in dev
// forward({
//   from: addFinanceItems,
//   to: postFinanceItemFx,
// });

// forward({
//   from: deleteFinanceItem,
//   to: deleteFinanceItemFx,
// });
