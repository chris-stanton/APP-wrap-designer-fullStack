

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//file paths
var spacingRouter = require('./server/routes/spacingRouter.js');
var colorRouter = require('./server/routes/colorRouter.js');
var addRouter = require('./server/routes/addRouter.js');
var authRouter = require('./server/routes/authRouter.js');

//listening port
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});//end of app.listen

//static files
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/inboundURLbase',spacingRouter);



//routers
app.use('/spacing', spacingRouter);
app.use('/color', colorRouter);
app.use('/auth', authRouter);

//authentication is required below this line
//these two lines are required
var decoder = require('./server/modules/decoder.js');
app.use(decoder.token);

app.use('/add', addRouter);
