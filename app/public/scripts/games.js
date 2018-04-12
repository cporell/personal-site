/*
 * Script to populate the games page.
 */
 load();

 function load(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myarr = JSON.parse(this.responseText);
			myarr.forEach(function(elt){
				document.getElementById('feature').innerHTML += buildGamesTemplate(elt);
			});
		}
	};

	xmlhttp.open("GET", "/app/public/pageContent/games.txt", true);
	xmlhttp.send();	
}

// Build a template for a game selector
// element has 3 parts assuming text parsing is correct:
// title, image, desc
function buildGamesTemplate(elt){
	var templateStr = '<div class="gameBlock">';
	templateStr += '<div class="gameContent">';
	templateStr += '<a href="/' + elt.type + '/' + elt.img + '">';
	templateStr += '<img class="gamePic" src="/app/public/images/coverimages/' + elt.img + '.png"><br/>';
	templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
	templateStr += elt.desc + '</p>';
	templateStr += '</a>';
	templateStr += '</div>';
	templateStr += '</div>';
	return templateStr;
}