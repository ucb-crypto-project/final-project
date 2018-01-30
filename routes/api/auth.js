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

router.post('/login', passport.authenticate('local'), ({ user }, res) => {
    res.send({ user })
  })

router.get('/logout', (req, res) => {
    req.logout()
    res.send({})
  })

// Route for client to check if there's still a live server session
router.get('/session', isAuthenticated, (req, res) => {
  const { email, id } = req.user
  console.log(`This is the email: ${email}, this is the ID ${id}`)
  res.json({ user: { email, id }})
})

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

// }
