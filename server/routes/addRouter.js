
console.log("addRouter.js works!")

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

//add blanks to database
router.post('/addBlank', function (req, res) {
  var newBlankOrder = req.body;
  console.log('add blank: ', newBlankOrder);
  pool.connect()
    .then(function (client) {
//adds newBlankOrder data to table
      client.query('INSERT INTO blanks (blankName, mfgName, blankLength, blankMaterial, handleLength, handleType) VALUES ($1, $2, $3, $4, $5, $6)',
        [newBlankOrder.blankName, newBlankOrder.mfgName, newBlankOrder.blankLength, newBlankOrder.blankMaterial, newBlankOrder.handleLength, newBlankOrder.handleType])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.post


//adds guides to database
router.post('/addGuide', function (req, res) {
  var newBlankOrder = req.body;
  console.log('add blank: ', newBlankOrder);
  pool.connect()
    .then(function (client) {
//adds guides data to table
      client.query('INSERT INTO guides (guideSizeTipTop, guideSizeTwo, guideSizeThree, guideSizeFour, guideSizeFive, guideSizeSix) VALUES ($1, $2, $3, $4, $5, $6)',
        [newBlankOrder.guideSize.guideTipTop, newBlankOrder.guideSize.guideTwo, newBlankOrder.guideSize.guideThree, newBlankOrder.guideSize.guideFour, newBlankOrder.guideSize.guideFive, newBlankOrder.guideSize.guideSix])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.post


//add newThreadOrder to database
router.post('/addThread', function (req, res) {
  var newThreadOrder = req.body;
  console.log('add thread: ', newThreadOrder);
  pool.connect()
    .then(function (client) {
//adds newThreadOrder data to table
      client.query('INSERT INTO threads (mfgName, color, image) VALUES ($1, $2, $3)',
        [newThreadOrder.mfgName, newThreadOrder.color, newThreadOrder.image])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.post




module.exports = router;
