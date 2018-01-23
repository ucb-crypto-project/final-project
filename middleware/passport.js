'use strict'
// The line below makes use of both object destrucuring
// and aliasing. It grabs the `Strategy` property from
// the passport-local module and aliases (renames) it
// as `LocalStrategy`.
const { Strategy: LocalStrategy } = require('passport-local')
// Equivalent old JS would look as follows:
// var LocalStrategy = require('passport-local').Strategy
const db = require('../models')
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password
module.exports = function (passport) {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email'
    },
    async function(username, password, done) {
      // When a user tries to sign in this code runs
      try {
        const dbUser = await db.User.findOne({ where: { username } })
        if ( !dbUser ) {
          return done(null, false, {
            message: 'Incorrect username.'
          })
        }
        // If there is a user with the given username, but the password the user gives us is incorrect
        else if ( !dbUser.validPassword(password) ) {
          return done(null, false, {
            message: 'Incorrect password.'
          })
        }
        // If none of the above, then the user has been successfully authenticated!
        return done(null, dbUser)
      }
      catch (err) {
        console.error('Error in passport local strategy: ', err)
        done(err)
      }
    }
  ))
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser(({ id }, cb) => {
    cb(null, { id })
  })
  // Deserializing is what populates the `user` property on the request object.
  // So whenever you see `req.user` in the code it's coming from this.
  passport.deserializeUser(({ id }, cb) => {
    db.User.findOne({ where: { id }, attributes: [ 'username', 'id' ] })
      .then( user => {
        cb(null, user)
      })
  })

}
