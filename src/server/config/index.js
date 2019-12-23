module.exports = {
  database: 'taco',
  dialect: 'postgres',
  logging: false,
  operatorsAliases: false,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME
};


