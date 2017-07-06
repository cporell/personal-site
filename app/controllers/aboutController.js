var fs = require('fs');
var path = require('path');

var aboutController = {
	loadAbout : loadAbout
};

function loadAbout(req, res){
	res.sendFile(path.join(__dirname + '/../pages/about.html'));
}

module.exports = aboutController;