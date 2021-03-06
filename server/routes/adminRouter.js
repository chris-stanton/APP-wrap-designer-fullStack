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

//gets all threads
router.get('/allThreads', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM threads WHERE certified='false' ORDER BY mfgName ASC")
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
      client.query("UPDATE newBlanks SET blankName=$1, mfgName=$2, blankLength=$3, blankMaterial=$4, handleLength=$5, guideSizeTipTop=$6, guideSizeTwo=$7, guideSizeThree=$8, guideSizeFour=$9, guideSizeFive=$10, guideSizeSix=$11, oneTwo=$12, twoThree=$13, threeFour=$14, fourFive=$15, fiveSix=$16, certified=$17 WHERE id=$18",
        [updatedObject.blankname, updatedObject.mfgname, updatedObject.blanklength, updatedObject.blankmaterial, updatedObject.handlelength, updatedObject.guidesizetiptop, updatedObject.guidesizetwo, updatedObject.guidesizethree, updatedObject.guidesizefour, updatedObject.guidesizefive, updatedObject.guidesizesix, updatedObject.onetwo, updatedObject.twothree, updatedObject.threefour, updatedObject.fourfive, updatedObject.fivesix, updatedObject.certified, updatedId])
        .then(function (result) {
          console.log(result.rows);
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          res.sendStatus(500);
        });
    }).catch(function(err) {
      console.log('error connecting to database:', err);
    });
});

//deleting unwanted blank garbage from admin view
router.delete('/delete/:id', function(req, res) {
  var deleteId = req.params.id;
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


//certifies thread entrys
router.put('/updateThread/:id', function(req, res) {
  var threadId = req.params.id;
  var thread = req.body;
  console.log('AR: ', thread);
  pool.connect()
    .then(function (client) {
      client.query("UPDATE threads SET mfgName=$1, color=$2, threadNumber=$3, image=$4, certified=$5 WHERE id=$6",
        [thread.mfgname, thread.color, thread.threadnumber, thread.image, thread.certified, threadId])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
      }).catch(function (err) {
          console.log('error on UPDATE', err);
          res.sendStatus(500);
        });
    }).catch(function(err) {
      console.log('error connecting to database:', err);
    });
});

//deleting unwanted thread garbage from admin view
router.delete('/deleteThread/:id', function(req, res) {
  var deleteId = req.params.id;
  pool.connect()
    .then(function (client) {
      client.query('DELETE FROM threads WHERE id = $1',
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

//gets all admin level email addresses on init()
router.get('/userEmail', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT userEmail FROM adminEmail ORDER BY userEmail ASC")
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
