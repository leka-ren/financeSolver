import axios from "axios";

const financeItemsUrl = `https://finance-solver-api-v2.fly.dev/expenses`;
export const getFinanceItemsEndpoint = () => axios(financeItemsUrl);
