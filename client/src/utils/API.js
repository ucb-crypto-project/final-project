import axios from "axios";
const binance = require('node-binance-api');

binance.options({
  'APIKEY':'',
  'APISECRET':'',
  'test':true,
});

export default {
  getCoins: function() {
    binance.prices((error, ticker) => {
    console.log("prices()", ticker);
    console.log("Price of BNB: ", ticker.BNBBTC);
});
  }
};
