import axios from "axios";
// const binance = require('node-binance-api');
//
// binance.options({
//   'APIKEY':'<api key>',
//   'APISECRET':'<api secret>',
//   'test':true,
// });

export default {
  getCoins: function() {
    return axios.get("/coins");
  }
};
