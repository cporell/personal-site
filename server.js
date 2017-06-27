var express = require('express');
var path = require('path');

var router = require('./app/routes/router');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', router);

app.listen(port, function() {
	console.log('Node app is running at localhost:' + port);
});

// app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(__dirname + '/public'));