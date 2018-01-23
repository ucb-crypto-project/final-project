import axios from "axios";

export default {
  getCoins: function() {
    return axios.get('https://api.coinmarketcap.com/v1/ticker/');
  }
};
