/*
 * Script to populate the games page.
 */
 
 // Build a template for a game selector
 // element has 3 parts assuming text parsing is correct:
 // title, image, desc
function buildGamesTemplate(elt){
	var templateStr = '';
	templateStr += '<div class="gameBlock">';
	templateStr += '<a href="/games/' + elt.title + '">';
	templateStr += '<img class="gamePic" src="/app/public/images/' + elt.img + '.png"><br/>';
	templateStr += '<p>' + elt.title + '<br/>';
	templateStr += elt.desc + '</p>';
	templateStr += '</a>';
	templateStr += '</div>';
	return templateStr;
}

function load(){

document.getElementById('feature').innerHTML += 'Hello world <br/>';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		myarr = JSON.parse(this.responseText);
		var counter = 0;
		myarr.forEach(function(elt){
			document.getElementById('feature').innerHTML += buildGamesTemplate(elt);
			counter++;
			if(counter >= 2){
				counter = 0;
				document.getElementById('feature').innerHTML += '<br/>';
			}
			/*
			document.getElementById('feature').innerHTML += '<img class=bioPic src="/app/public/images/' + elt.img + '.jpg"><br/>';
			document.getElementById('feature').innerHTML += elt.title + '<br/>';
			document.getElementById('feature').innerHTML += elt.desc + '<br/>';
			document.getElementById('feature').innerHTML += '<br/>';
			*/
			
		});
	}
};
xmlhttp.open("GET", "/app/public/pageContent/test.txt", true);
xmlhttp.send();
	
}

load();