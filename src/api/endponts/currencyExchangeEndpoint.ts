import axios from "axios";

interface GetCurrencyExchangeArgs {
  from: string;
  to: string;
  amound: string | number;
}

export const currencyExchangeEndpoint = ({
  from,
  to,
  amound,
}: GetCurrencyExchangeArgs) => {
  const apiCurrencyExchange = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amound}`;
  const apikey = process.env.REACT_APP_API_CURRENCY_KEY || "";

  return axios(apiCurrencyExchange, {
    headers: {
      apikey,
    },
  });
};
