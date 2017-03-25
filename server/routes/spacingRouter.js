console.log("spacingRouter works!!");
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

//gets all blanks
router.get('/allBlanks', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM newBlanks')
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

//gets specificBlank
router.get('/specificBlanks', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT blankName, blanklength FROM blanks')
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

//gets all guide measurements
router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM guideMeasurements')
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
