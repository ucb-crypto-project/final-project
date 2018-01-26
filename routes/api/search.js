const router = require('express').Router();
const searchController = require('../../controllers/searchController');

console.log('Search controller');

// Matches with "/api/search"



// Matches with "/api/search/:id"
// router
//   .route('/:id')
//   .get(searchController.getCoinData);
//   .put(searchController.update)
//   .delete(searchController.remove);



module.exports = function(router) {
  // GET route for getting all of the posts
  router.get("/", function(req, res) {
	let coinHistoryData = searchController.firstSearch();
	res.json(coinHistoryData);
  });


	// router.route('/')
 //  .get(searchController.firstSearch);

}