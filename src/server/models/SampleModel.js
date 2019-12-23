'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Sample = db.define('sample', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Sample;
