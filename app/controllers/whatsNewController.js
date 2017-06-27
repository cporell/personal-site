var path = require('path');

var whatsNewController = {
		loadWhatsNewHome : loadWhatsNewHome
};

function loadWhatsNewHome(req, res){
		res.sendFile(path.join(__dirname + '/../whatsnewinwiz/whatsnew.html'));
}

module.exports = whatsNewController;