import axios from "axios";



export default {
	// Gets all books
	coinHistoryData: function(coin) {
		return axios(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=9&aggregate=1&e=CCCAGG`);
	},
	
	
};
