import axios from 'axios';

export default {
  // Gets all coin prices
  getCoins: function() {
    return axios.get("/api/coins");
  },
  // Gets the coin with the given id
  getCoin: function(id) {
    return axios.get("/api/coins/" + id);
  },
  // Deletes the coin with the given id
  deleteCoin: function(id) {
    return axios.delete("api/coins/" + id);
  },
  // Saves a coin to the database
  saveCoin: function(coinData) {
    return axios.post("/api/coins", coinData);
  }
};
