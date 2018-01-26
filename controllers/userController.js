const db = require('../models');

module.exports = {
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(423).json(err));
  }
};
