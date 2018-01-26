// const keys = require('./config/config.js');
const request = require('request');



function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    console.log(JSON.stringify(info, null, 2));
  } else {
    console.log(error);
  }
}



// userQuery = encodeURI(process.argv[2]);

// queryString =`organization_name:${userQuery}`;

// searchString = SEARCH_URI + queryString;
// const searchString = SEARCH_URI;

// request.get(searchString, {
//   'auth': {
//     'user': keys.searchKey,
//     'pass': '',
//     'sendImmediately': false
//   }
// }, callback);


// console.log('\n ------------------------ ');
// console.log(`Search String: ${searchString} \n`);

module.exports = {
	getCoinData: getCoinData = function (coin) {
		let SEARCH_URI = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1&aggregate=1&e=CCCAGG`;
		console.log(`Searching for ${coin}...`);
		request.get(SEARCH_URI, callback);
	}
}






// var request = require('request')
// var rp = require('request-promise');


// request
// 	.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=1&aggregate=1&e=CCCAGG')
// 	.on('response', function(response) {
// 	// console.log(response.statusCode) // 200
// 	console.log(response);
// })

// const coin = 'BTC';
// let searchData;

// // const options = {
// // 	method: 'GET',
// // 	uri: `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1&aggregate=1&e=CCCAGG`
// // }

// var options = {
//     uri: `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1&aggregate=1&e=CCCAGG`,
//     qs: {
//         access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
//     },
//     headers: {
//         'User-Agent': 'Request-Promise'
//     },
//     json: true // Automatically parses the JSON string in the response
// };

// module.exports = {
// 	searchData: {},
// 	getCoinData: getCoinData = function () {
// 		rp(options)
// 		    .then(function (repos) {
// 		        console.log('Search data = ', repos.Data[0]);
// 		        this.searchData = repos.Data[0];
// 		    })
// 		    .catch(function (err) {
// 		        // API call failed...
// 		        console.log("Error");
// 		    });
// 	}
// }