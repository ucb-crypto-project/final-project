import axios from "axios";

export default {

  signup: credentials => ( axios.post('/api/auth/signup', credentials) ),

	// Gets data for historical charts
	coinHistoryData: function(coin, numDays) {
		return axios(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=${numDays}&aggregate=1&e=CCCAGG`);
	},
	
	
  login: credentials => ( axios.post('api/auth/login', credentials) ),
  //
  checkForSession: credentials => ( axios.get('/api/auth/session') ),

  getCoins: function() {
    return axios.get('http://coincap.io/front');
  }
};
