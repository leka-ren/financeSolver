import { createDomain } from "effector";

// Domain
const financeListDomain = createDomain();

// Effect
export const addItemInList = financeListDomain.createEvent();