import axios from "axios";



export default {
	// Gets all books
	coinHistoryData: function(coin, numDays) {
		var daysGap = numDays / 10;

		return axios(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=${numDays}&aggregate=1&e=CCCAGG`);
	},
	
	
};
