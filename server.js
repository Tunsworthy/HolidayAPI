var express = require('express');
	app = express();
	mongoose = require('mongoose');
	Locations = require('./api/models/locations'),
	Routes = require('./api/models/routes'),
	Checkin = require('./api/models/checkin'),
	User = require('./api/models/users'),
	bodyParser = require('body-parser');
	port = process.env.PORT || 3000;
	mongourl = process.env.MONGODB_URI;
	cors = require('cors');
	jwt = require('jsonwebtoken');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(mongourl, {useNewUrlParser: true}); 



//Routes
//var client = require('./routes/routeclient');
//var all = require('./routes/allroutes');
var locations = require('./api/routes/locationsroute')
var routes = require('./api/routes/routesroute')
var checkin = require('./api/routes/checkinroute')
var auth = require('./api/middleware/auth');
// view engine setup


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(auth);
routes(app);
locations(app);
checkin(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});



app.listen(port);

console.log('Holiday RESTful API server started on: ' + port);