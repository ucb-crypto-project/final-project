'use strict'
// Requiring our models
const db = require('../../models');
const passport = require('passport');
const router = require('express').Router();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/signup', function(req, res, next) {
  console.log(req.body);

    const { email, password } = req.body;

        try {
          db.User.create(req.body)
            .then(user => {
              passport.authenticate('local')( req, res, function () {
                res.send( {user: user} )
              });
            })
            .catch(err => console.log(err));
        }
        catch (err) {
          res.json(err)
        }
});
//, passport.authenticate('local'), ({ user }, res) => {
  //console.log(res)
  // res.send({ user })
// });

  module.exports = router;
//
// module.exports = (app, passport) => {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, then respond with the user.
//   // Otherwise send an error
//   // app.post('/login', passport.authenticate('local'), ({ user }, res) => {
//   //   res.send({ user })
//   // })
//
//   // Route for signing up a user. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//
//
//   // app.post('/signup', async function(req, res, next) {
//   //   console.log(req);
//   //   console.log('this route is working');
//   //   const { email, password } = req.body
//   //   try {
//   //     await db.User.create(req.body)
//   //     next()
//   //   }
//   //   catch (err) {
//   //     res.json(err)
//   //   }
//   // }, passport.authenticate('local'), ({ user }, res) => {
//   //   res.send({ user })
//   // })
//
//   // Route for logging user out
//   app.get('/logout', (req, res) => {
//     req.logout()
//     res.send({})
//   })
//
//   // Route for client to check if there's still a live server session
//   app.get('/session', isAuthenticated, (req, res) => {
//     const { username, id } = req.user
//     res.json({ user: { username, id }})
//   })
// }
