// var decoder = require('./modules/decoder');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var spacingRouter = require('./server/routes/spacingRouter.js');
var addRouter = require('./server/routes/addRouter.js');
var authRouter = require('./server/routes/authRouter.js');

//static files
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/inboundURLbase',spacingRouter);

//routers
app.use('/spacing', spacingRouter);
app.use('/add', addRouter);
app.use('/auth', authRouter);


//listening port
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});



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
