var express = require('express'),
	path = require('path');

var router = express.Router();

// load the main page on reaching the base dir
router.get('/', function(req, res){
	res.render('pages/home', {title: 'Home'});
});

router.get('/about', function(req, res){
	res.render('pages/about', {title: 'About Me'});
});

router.get('/resume', function(req, res){
	res.render('pages/resume', {title: 'Skills and Experience'});
});

router.get('/games', function(req, res){
	res.render('pages/games', {title: 'Games'});	
});

router.get('/games/:id', function(req, res){
	res.render('pages/games/' + req.params.id, {title: req.params.id});	
});

router.get('/projects', function(req, res){
	res.render('pages/projects', {title: 'Other Projects'});
});

// router.get('/projects/:id', function(req, res){
// 	res.render('pages/projects/' + req.params.id, {title: req.params.id});	
// });

router.get('/projects/:id', function(req, res){
	res.render('pages/projectpage', {title: req.params.id});	
});

router.get('/contact', function(req, res){
	res.render('pages/contact', {title: 'Contact Me'});
});

router.get('/whats-new', function(req, res){
	res.render('pages/subsites/whats_new_in_wiz/whatsnew', {title: 'What\'s New in Wizard101'});
});

router.get('/whats-new/:id', function(req, res){
	res.render('pages/subsites/whats_new_in_wiz/' + req.params.id, {title: req.params.id});
})

router.get('/dbtest', function(req, res){
	res.render('pages/projectpage', {title: 'DBtest'});
})

router.get('/*', function(req, res){
	res.render('pages/404page', {title:'Page not found'});
});

module.exports = router;