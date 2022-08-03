const fs = require("fs");

export function getFinanceItems() {
  let financeJson = fs.readFileSync("../data/financeInfo.json");
  let financeItemsParsed = JSON.parse(financeJson);

  return financeItemsParsed.data;
}
