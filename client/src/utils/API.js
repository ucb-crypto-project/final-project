import axios from "axios";

export default {
  getCoins: function() {
    return axios.get("/coins");
  }
};
