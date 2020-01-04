require('dotenv').config();

const app = require('./app');
const db = require('./models');

const PORT = 1337;

db.sync().then(function() {
  app.listen(PORT, () => {
    console.log('Knock, knock');
    console.log("Who's there?");
    console.log(`studiously serving silly sounds on port ${PORT}`);
  });
});
