/*
 * Script to populate the games page.
 */
 
 // Build a template for a game selector
 // element has 3 parts assuming text parsing is correct:
 // title, image, desc
function buildGamesTemplate(elt){
	var templateStr = '';
	templateStr += '<span class="gameBlock">';
	templateStr += '<a href="/games/' + elt.title + '">';
	templateStr += '<img class="gamePic" src="/app/public/images/gameCovers/' + elt.img + '.png"><br/>';
	templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
	templateStr += elt.desc + '</p>';
	templateStr += '</a>';
	templateStr += '</span>';
	return templateStr;
}

function load(){

//document.getElementById('feature').innerHTML += 'Hello world <br/>';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		myarr = JSON.parse(this.responseText);
		var counter = 0;
		// document.getElementById('feature').innerHTML += '<div class="gameRow">';
		myarr.forEach(function(elt){
			document.getElementById('feature').innerHTML += buildGamesTemplate(elt);
			// if(counter >= 2){
			// 	counter = 0;
			// 	document.getElementById('feature').innerHTML += '</div>';
			// 	document.getElementById('feature').innerHTML += '<div class="gameRow">';
			// }
			// else{
			// 	counter++;
			// }
		});
	}
};
xmlhttp.open("GET", "/app/public/pageContent/games.txt", true);
xmlhttp.send();
	
}

load();