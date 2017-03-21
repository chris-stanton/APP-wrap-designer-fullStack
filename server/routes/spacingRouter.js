var express = require('express');
var router = express.Router();
var Blanks = require('../models/blanks');//user
var Threads = require('../models/threads');//secrets

router.get('/', function(req, res) {
  console.log('hit router GET all blanks');

  // db query
  Blanks.find({}, function(err, result){
    if(err){
      console.log('We got an error:', err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });//end of Blanks.find()
});//end of router.get()






module.exports = router;
//
// EXAMPLE CODE
// var express = require('express');
// var router = express.Router();
// var Blanks = require('../models/blanks');//user
// var Thread = require('../models/threads');//secrets
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
