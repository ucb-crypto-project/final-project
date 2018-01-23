const binance = require('node-binance-api');
binance.options({
  APIKEY: '<key>',
  APISECRET: '<secret>',
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});

getCoins = () => {
binance.prices(function(ticker) {
	console.log("prices()", ticker);
	console.log("Price of Binance Coin / Bitcoin: "+ ticker.BNBBTC);
});
}

getCoins();
