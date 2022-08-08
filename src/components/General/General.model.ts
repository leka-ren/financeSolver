const axios = require("axios");

export const getCurrency = () => {
  const options = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/convert",
    params: { format: "json", from: "EUR", to: "IDR", amount: "1000" },
    headers: {
      "X-RapidAPI-Key": "a76902d6e3msh770b49131065cffp14aa8bjsn9ac8033281cd",
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response: any) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.error(error);
    });
};
