var express = require('express');
var app = express();
var path = require('path');
var router = require('./server/routes/routes.js')

app.use('/inboundURLbase',router)

//Serve back static files
app.use(express.static(path.join(__dirname, './public')));

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});


// var express = require('express');
// var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');
// var decoder = require('./modules/decoder');
// var mongoConnection = require('./modules/mongo-connection');
// var privateData = require('./routes/private-data');
//
// var portDecision = process.env.PORT || 5000;
//
// app.get('/', function(req, res){
//   res.sendFile(path.resolve('./public/views/index.html'));
// });
//
// app.use(express.static('public'));
//
// //gives us req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
// //database connection
// mongoConnection.connect();
//
// //Decodes the token in the request header and attaches the decoded token to req.decodedToken on the request.
// app.use(decoder.token);
//
// /* Whatever you do below this is protected by your authentication. */
//
// //This is the route for your secretData. The request gets here after it has been authenticated.
// app.use("/privateData", privateData);
//
// app.listen(portDecision, function(){
//   console.log("Listening on port: ", portDecision);
// });
