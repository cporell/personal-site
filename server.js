var express = require('express');
var router = require('./public/routing/router');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', router);

app.listen(port, function() {
	console.log('Node app is running at localhost:' + port);
});