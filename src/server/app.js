const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./models/db');
const passport = require('passport');

const app = express();

// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so that our session table gets created
dbStore.sync();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// plug the store into our session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

//these should come AFTER the session middleware.
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes'));


//Because we generally want to build single-page applications (or SPAs), our server should send its index.html for any requests that don't match one of our API routes.This should come after all of the routes in our server entry file!
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Make sure this is at the very end of your server entry file!
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  //res.status(err.status || 500).sendFile(path.join(__dirname, '../500.html'));
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
