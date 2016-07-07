const express = require('express');
const app = express();
const Character = require('../models/character');
const bodyParser = require('body-parser').json();
const cors = require('./cors')();

app.use(express.static(__dirname + './../public'));

app.use(cors);

app.get('/api/characters', (req, res, next) => {
  Character.find()
  .then( data => {
    res.json(data);
  })
  .catch( err => {
    next({code: 500, error: 'Database failed to get data', msg: err});
  });

});

app.post('/api/characters', bodyParser, (req, res, next) => {
  new Character(req.body).save()
  .then( char => {
    res.json(char);
  })
  .catch( err => {
    next({code: 500, error: 'Database failed to save data', msg: err});
  });
});

app.use( (err, req, res, next) => {
  next.beQuietLint = true;
  res.status(err.code || 500).json( {error: err.error || 'Server Error', msg: err.msg});
});

module.exports = app;
