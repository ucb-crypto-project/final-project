import axios from "axios";



export default {
	// Gets all books
	coinHistoryData: function(coin) {
		return axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=10&aggregate=1&e=CCCAGG`);
	},
	
	
};
