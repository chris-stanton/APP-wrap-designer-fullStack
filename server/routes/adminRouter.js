console.log("adminRouter works!!");

//database connection
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

//pool / pg constructor function
var pool = new pg.Pool(config);

//gets all blanks
router.get('/allBlanks', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM newBlanks WHERE certified='false' ORDER BY blankName ASC")
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

//certifies blank entrys
router.put('/update/:id', function(req, res) {
  var updatedId = req.params.id;
  var updatedObject = req.body;
  console.log('Updating object: ', req.body);
  pool.connect()
    .then(function (client) {
      client.query("UPDATE newBlanks SET certified = 'true' WHERE id=$1 RETURNING *",
        [updatedId])
        .then(function (result) {
          console.log(result.rows);
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on UPDATE', err);
          res.sendStatus(500);
        });
    }).catch(function(err) {
      console.log('error connecting to database:', err);
    });
});

//deleting unwanted garbage from admin view
router.delete('/delete/:id', function(req, res) {
var deleteId = req.params.id;
console.log('Deleting Client ID:, ', deleteId);
pool.connect()
  .then(function (client) {
    client.query('DELETE FROM newblanks WHERE id = $1',
      [deleteId])
      .then(function (result) {
        client.release();
        res.sendStatus(200);
      })
      .catch(function (err) {
        console.log('error on Delete', err);
        res.sendStatus(500);
      });
  });
});




module.exports = router;
