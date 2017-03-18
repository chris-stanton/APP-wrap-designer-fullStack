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
//
// EXAMPLE CODE
// var express = require('express');
// var router = express.Router();
// var Blanks = require('../models/blanks');//user
// var Thread = require('../models/thread');//secrets
//
// router.get("/", function(req, res){
//   var userEmail = req.decodedToken.email;
//   //Check the user's level of permision based on their email
//   Blanks.findOne({ email: userEmail }, function (err, user) {
//     if (err) {
//       console.log('Error COMPLETING clearanceLevel query task', err);
//       res.sendStatus(500);
//     } else {
//       console.log(user);
//       if(user == null) {
//         //If the user is not in the database, return a forbidden error status
//         console.log('No user found with that email. Have you added this person to the database? Email: ', req.decodedToken.email);
//         res.sendStatus(403);
//       } else {
//         //Based on the clearance level of the individual, give them access to different information
//         Secret.find({ secrecyLevel: { $lte: user.clearanceLevel } }, function (err, secrets){
//           if (err) {
//             console.log('Error COMPLETING secrecyLevel query task', err);
//             res.sendStatus(500);
//           } else {
//             //return all of the results where a specific user has permission
//             res.send(secrets);
//           }
//         });
//       }
//     }
//   });
// });
//
//
// router.post("/", function(req, res){
//   console.log("server post route hit", req.body);
//   var userEmail = req.decodedToken.email;
//   // console.log('userLevel: ', userLevel);
//   // console.log('decoded token: ', req.decodedToken)
//   var secretObject = req.body;
//   var newSecret = new Secret ({
//     secretText: secretObject.secretText,
//     secrecyLevel: secretObject.secrecyLevel
//   });
//
//
//   Blanks.findOne({ email: userEmail }, function (err, user) {
//     if (err) {
//       console.log('Error COMPLETING clearanceLevel query task', err);
//       res.sendStatus(500);
//     } else {
//       console.log(user);
//       if(user == null) {
//         //If the user is not in the database, return a forbidden error status
//         console.log('No user found with that email. Have you added this person to the database? Email: ', req.decodedToken.email);
//         res.sendStatus(403);
//       } else {
//         //Based on the clearance level of the individual, give them access to different information
//         Secret.find({ secrecyLevel: { $lte: user.clearanceLevel } }, function (err, secrets){
//           if (err) {
//             console.log('Error COMPLETING secrecyLevel query task', err);
//             res.sendStatus(500);
//           } else {
//
//             //return all of the results where a specific user has permission
//             if(newSecret.secrecyLevel <= user.clearanceLevel){
//               newSecret.save(function(err, result){
//             })//end of newSecret.save
//           }//end of if(newSecret.secrecyLevel <= userLevel)
//           }
//         });//end of Secret.find
//       }
//     }
//   });//end of User.findOne
//
//
// });//ends router.post
//
// module.exports = router;
