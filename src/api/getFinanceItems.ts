import { createStore } from "effector";
import { finanseDefaultData } from "../data/financeInfo";
import { FinanceItemProps } from "../types/financeItemProps";

export const $financeItems = createStore<FinanceItemProps[]>(
  finanseDefaultData.data
);
