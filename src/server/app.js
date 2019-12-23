const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
