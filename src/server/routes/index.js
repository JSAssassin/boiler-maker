'use strict';

const router = require('express').Router();



router.use('/puppies', require('./puppies')); // matches all requests to /api/puppies/

router.use(function (req, res, next) {
  const err = new Error('404 Not found.');
  err.status = 404;
  next(err);
});


module.exports = router;
