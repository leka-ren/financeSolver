import axios from "axios";
import { FinanceItemProps } from "../../types/financeItemProps";

const financeItemsUrl = `https://finance-solver-api-v2.fly.dev/expenses`;

export const getFinanceItemsEndpoint = () => axios(financeItemsUrl);

export const postFinanceItemEndpoint = ({ ...data }: FinanceItemProps) => {
  const res = {
    category: data.category,
    price: Number(data.price),
  };
  return axios.post(financeItemsUrl, res);
};

export const deleteFinanceItemsEndpoint = (id: string) =>
  axios.delete(`${financeItemsUrl}/${id}`);
