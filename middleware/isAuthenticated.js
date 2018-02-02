
'use strict'
// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function isAuthenticated(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next()
  }
  // If the user isn't logged in, send a 404 error
  return res.status(401).send({})
}
