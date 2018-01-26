let historicalData = require('../models/historical');

module.exports = {
  firstSearch: function() {
    console.log('controller was called...');
    historicalData.getCoinData('BTC');
  },
  getCoinData: function(req, res) {
    historicalData
      .getCoinData(req.params.id)
      .then(coinData => res.json(coinData))
      .catch(err => res.status(422).json(err));
  },
};
