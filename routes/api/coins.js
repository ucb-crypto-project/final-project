const router = require('express').Router();
const coinController = require('../../controllers/coinController');


router.route('/coins')
  .get(coinController.getCoins);
  .post(userController.create);

// Matches with "/api/users/:id"
// router
//   .route('/:id')
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
