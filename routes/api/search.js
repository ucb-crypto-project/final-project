const router = require('express').Router();
const searchController = require('../../controllers/searchController');



module.exports = function() {
  // Matches with "/api/search"
  console.log('Search controller');
  router.route('/')
  .get('/', 
   function(req, res) {
	console.log('inside the router...');
	let coinHistoryData = searchController.firstSearch('BTC');
	console.log(coinHistoryData);
	res.json(coinHistoryData);
  })
  .then(console.log('Success'));
	// router.route('/')
	// 	.get(searchController.firstSearch);
}