import axios from 'axios';

export default {
  // Gets all coin prices
  getCoinPrices: function() {
    return axios.get("/api/coinprices");
  },
  // Gets the coin with the given id
  getCoinPrice: function(id) {
    return axios.get("/api/coinprices/" + id);
  },
  // Deletes the coin with the given id
  deleteCoinPrice: function(id) {
    return axios.delete("api/coinprices/" + id);
  },
  // Saves a coin to the database
  saveCoinPrice: function(coinData) {
    return axios.post("/api/coinprices", coinData);
  }
};
