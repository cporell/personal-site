/*
 * Script to populate the games page.
 */
loadSubsites();
loadProjects();

function loadProjects(){
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
	templateStr += '<a href="/projects/' + elt.title + '">';
	templateStr += '<img class="projectPic" src="/app/public/images/coverImages/' + elt.img + '.png"><br/>';
	templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
	templateStr += '<span class="projectDesc">' + elt.desc + '</span></p>';
	templateStr += '</a>';
	templateStr += '</div>';
	templateStr += '</div>';
	return templateStr;
}

function loadSubsites(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myarr = JSON.parse(this.responseText);
			myarr.forEach(function(elt){
				document.getElementById('feature').innerHTML += buildSubsiteTemplate(elt);
			});
		}
	};
	xmlhttp.open("GET", "/app/public/pageContent/subsites.txt", true);
	xmlhttp.send();
}

function buildSubsiteTemplate(elt){
	var templateStr = '<div class="projectBlock">';
	templateStr += '<div class="projectContent">';
	templateStr += '<a href="/subsites/' + elt.loc + '">';
	templateStr += '<img class="projectPic" src="/app/public/images/coverImages/' + elt.img + '.png"><br/>';
	templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
	templateStr += '<span class="projectDesc">' + elt.desc + '</span></p>';
	templateStr += '</a>';
	templateStr += '</div>';
	templateStr += '</div>';
	return templateStr;
}