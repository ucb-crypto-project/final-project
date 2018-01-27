// let historicalData = require('../models/historical');
const request = require('request');

// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const info = JSON.parse(body);
//     return (JSON.stringify(info, null, 2));
//   } else {
//     console.log(error);
//   }
// }

let coinSearch = function (coin) {
		let SEARCH_URI = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1&aggregate=1&e=CCCAGG`;
		console.log(`Searching for ${coin}...`);
		var coinData = request.get(SEARCH_URI, function (error, response, body) {
		  console.log('error:', error); // Print the error if one occurred
		  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		  return ('body:', body); // Print the HTML for the Google homepage.
		});
			
		// request.get(SEARCH_URI, (error, response, body) => {
		//   if (!error && response.statusCode == 200) {
		//     const info = JSON.parse(body);
		//     return (JSON.stringify(info, null, 2));
		//   } else {
		//     console.log(error);
		//   }
		// });
}
		// request.get(SEARCH_URI, coinData => res.json(searchData));

module.exports = {
  firstSearch: function(req, res) {
    console.log('firstSearch was called...');
    let SEARCH_URI = `https://min-api.cryptocompare.com/data/histoday?fsym=${req}&tsym=USD&limit=1&aggregate=1&e=CCCAGG`;
    request.get(SEARCH_URI, function (error, response, body) {
    	console.log(res.json(body));

    });
    // coinSearch('BTC')
    // .then(searchData => res.json(searchData))
    // .catch(err => res.status(404).json(err))

  },
  getCoinData: function(req, res) {
    console.log('getCoinData was called...');
    coinSearch('BTC')
    .then(searchData => res.json(searchData))
    .catch(err => res.status(404).json(err))
  },
};

var firstSearch = function(req, res) {
    console.log(`firstSearch was called...${req}`);
    let SEARCH_URI = `https://min-api.cryptocompare.com/data/histoday?fsym=${req}&tsym=USD&limit=1&aggregate=1&e=CCCAGG`;
    request(SEARCH_URI, function (error, response, body) {
    	console.log(body);
    	var coinData = JSON.parse(body);
    	return (coinData);
    });
 }

// var testData = firstSearch('BTC');
// console.log(testData);


