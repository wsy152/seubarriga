const bodyParse = require('body-parser');

module.exports = (app) => {
  app.use(bodyParse.json());
};
