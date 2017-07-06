var express = require('express');
var path = require('path');

var whatsNewController = require('../controllers/whatsNewController'),
	aboutController = require('../controllers/aboutController');

var router = express.Router();

// load the main page on reaching the base dir
router.get('/', function(req, res){
	//res.sendFile(path.join(__dirname + '/../pages/home.html'));
	res.sendFile(path.join(__dirname + '/../pages/template.html'));
});

router.get('/whats-new', function(req, res){
	whatsNewController.loadWhatsNewHome(req, res);
});

router.get('/about', function(req, res){
	//aboutController.loadAbout(req, res);
	res.sendFile(path.join(__dirname + '/../pages/about.html'));
});

router.get('/games', function(req, res){
	res.sendFile(path.join(__dirname + '/../pages/games.html'));
});

router.get('/projects', function(req, res){
	res.sendFile(path.join(__dirname + '/../pages/projects.html'));
});

router.get('/contact', function(req, res){
	res.sendFile(path.join(__dirname + '/../pages/contact.html'));
});


router.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/../pages/404page.html'));
});


module.exports = router;