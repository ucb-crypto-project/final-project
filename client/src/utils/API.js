import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";
//
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

export default {
  getCoins: function() {
    return axios.get("https://api.binance.com/api/v3/ticker/price");
  }
};
