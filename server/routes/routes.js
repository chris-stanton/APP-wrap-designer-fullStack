var router = require('express').Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1500
};
var pool = new pg.Pool(config);

//sample GET request
  router.get('/', function(req, res) {

  console.log('hit my get all tasks route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
//SELECT * FROM task;
      client.query('<sample-database-query>;', function(err, result) {
        done(); //close the connection db
        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }//end of else
      });//client.query
    }//end of else
  });//end of pool.connect
});//end of router.get


//adds heroes data to database
router.post('/', function (req, res) {

  var newHero = req.body;
  console.log('router.post');

  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO table_two (persona, alias, power_id) VALUES ($1, $2, $3)',
        [newHero.persona, newHero.alias, newHero.power])
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

//delete super heroes by ID
router.delete('/:id', function(req, res) {

  var deleteVariable = req.params.id;
  console.log('router.delete');

  pool.connect()
    .then(function (client) {
      client.query('DELETE FROM table_two WHERE id = $1',
        [heroId])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.delete


//adds data to database by ID
router.put('/:id', function(req, res) {

  var NewId = req.params.id;
  var hero = req.body;
  console.log('router.put');

  pool.connect()
    .then(function (client) {
      client.query('UPDATE heroes SET persona = $1, alias = $2, power_id = $3 WHERE id = $4',
        [hero.persona, hero.alias, hero.power_id, hero.id])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on UPDATE', err);
          res.sendStatus(500);
        });//end of router.put
    });//end of .then
});//end of router.put


module.exports = router;
