const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const passport = require('passport');
const session = require('express-session')
const PORT = process.env.PORT || 3001;

//Manage key config with local .env file
require('dotenv').config();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static('client/build'));


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useMongoClient: true
  }
);

app.use(session({
  secret: 'crypto',
  resave: true,
  saveUninitialized: true
}))

// Passing the passport singleton to our passport middleware to load our authentication strategies
require('./middleware/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
