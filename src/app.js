const app = require('express')();
const bodyParse = require('body-parser');

app.use(bodyParse.json());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'Edvaldo', mail: 'edy@gmail.conm' },

  ];
  res.status(200).json(users);
});
app.post('/users', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
