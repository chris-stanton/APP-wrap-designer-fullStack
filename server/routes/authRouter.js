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

console.log("authRouter.js works!")





module.exports = router;