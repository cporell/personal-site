var express = require('express');
var path = require('path');

var router = express.Router();

// load the main page on reaching the base dir
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/../template.html'));
});

router.get('/whats-new', function(req, res){
	res.sendFile(path.join(__dirname + '/../whatsnewinwiz/whatsnew.html'));
});

module.exports = router;