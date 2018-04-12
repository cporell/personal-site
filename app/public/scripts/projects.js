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
				document.getElementById('feature').innerHTML += buildProjectTemplate(elt);
			});
		}
	};
	xmlhttp.open("GET", "/app/public/pageContent/projects.txt", true);
	xmlhttp.send();
}

// Build a template for a game selector
// element has 3 parts assuming text parsing is correct:
// title, image, desc
function buildProjectTemplate(elt){
	var templateStr = '<div class="projectBlock">';
	templateStr += '<div class="projectContent">';
	if(elt.type != 'subsites'){
		templateStr += '<a href="/' + elt.type + '/' + elt.title + '">';
	}
	else {
		templateStr += '<a href="/' + elt.img + '">';
	}
	templateStr += '<img class="projectPic" src="/app/public/images/coverimages/' + elt.img + '.png"><br/>';
	templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
	templateStr += '<span class="projectDesc">' + elt.desc + '</span></p>';
	templateStr += '</a>';
	templateStr += '</div>';
	templateStr += '</div>';
	return templateStr;
}