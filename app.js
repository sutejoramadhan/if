
//declare requires depencies
var express = require('express'),
	port = process.env.PORT || 8042,
	app = express();
	parser = require('body-parser'),
	path = require('path');

//set view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

//app uses
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Conten-Type, Accept");
	next();
});
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

//create server & launch application dab :)
app.listen(port);
console.log('Now server is running dude. On port ' + port +' ...');

//catch error handler
app.use(function(req, res, next) {
	res.status(404).render('__frontend/404');
});