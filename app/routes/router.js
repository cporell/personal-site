var express = require('express');
var path = require('path');

var whatsNewController = require('../controllers/whatsNewController');

var router = express.Router();

// load the main page on reaching the base dir
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/../template.html'));
});

router.get('/whats-new', function(req, res){
	whatsNewController.loadWhatsNewHome(req, res);
});

/*
router.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/../404page.html'));
});
*/

module.exports = router;