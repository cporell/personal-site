/*
 * Script to populate the HOME page.
 */
load();

// Build a template for a selector
// element has 3 parts assuming text parsing is correct:
// title, image, desc
function buildShowcaseTemplate(elt){
	var templateStr = '<div class="homeBlock">';
	templateStr += '<div class="homeContent">';
	templateStr += '<a href="/projects/' + elt.title + '">';
	templateStr += '<img class="homePic" src="/app/public/images/coverimages/' + elt.img + '.png"><br/>';
    templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
    if(elt.desc.length > 55){
        templateStr += '<div class="tooltip">' + elt.desc.substring(0, 55)+"...";
        templateStr += '<span class="tooltipText">' + elt.desc + '</span></div>'; // mouseover tooltip

    }
    else {
        templateStr += elt.desc;
    }
    templateStr += '</p>';
    templateStr += '</a>';
	templateStr += '</div>';
	templateStr += '</div>';
	return templateStr;
}

function load(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myarr = JSON.parse(this.responseText);
			myarr.forEach(function(elt){
				document.getElementById('feature').innerHTML += buildShowcaseTemplate(elt);
			});
		}
	};

	xmlhttp.open("GET", "/app/public/pageContent/showcase.txt", true);
	xmlhttp.send();	
}