console.log("colorRouter works!!");
var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
  database: 'solo',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

//gets all thread colors
router.get('/thread', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM threads')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
});//end of router.get

//gets all blank colors
router.get('/blank', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM blankColors')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
});//end of router.get

module.exports = router;
