const axios = require("axios").default;

axios({
  method: "get",
  url: "https://gasstation-mainnet.matic.network",
  responseType: "json",
}).then(function (response) {
  if (response.status == 200) {
    console.log("The recommended gas price is : \n", response.data);
  }
});

/**
 The recommended gas price is : 
 {
  safeLow: 37.7,
  standard: 46.5,
  fast: 47,
  fastest: 47,
  blockTime: 2,
  blockNumber: 36885271
}
*/
