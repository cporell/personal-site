/*
 * Script to populate the games page.
 */
 
 // Build a template for a game selector
 // element has 3 parts assuming text parsing is correct:
 // title, image, desc
function buildProjectTemplate(elt){
	var templateStr = '';
	templateStr += '<span class="projectBlock">';
	templateStr += '<a href="/projects/' + elt.title + '">';
	templateStr += '<img class="projectPic" src="/app/public/images/projectCovers/' + elt.img + '.png"><br/>';
	templateStr += '<p><span class="title">' + elt.title + '</span><br/>';
	templateStr += '<span class="projectDesc">' + elt.desc + '</span></p>';
	templateStr += '</a>';
	templateStr += '</span>';
	return templateStr;
}

function load(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myarr = JSON.parse(this.responseText);
			var counter = 0;
			document.getElementById('feature').innerHTML += '<div class="projectRow">';
			myarr.forEach(function(elt){
				document.getElementById('feature').innerHTML += buildProjectTemplate(elt);
				if(counter >= 1){
					counter = 0;
					document.getElementById('feature').innerHTML += '</div>';
					document.getElementById('feature').innerHTML += '<div class="projectRow">';
				}
				else{
					counter++;
				}
			});
		}
	};
	xmlhttp.open("GET", "/app/public/pageContent/projects.txt", true);
	xmlhttp.send();
}

load();

/**
 * Builds the slideshow by reading in the projects from the txt file
 * and then creating a slide for each one.
 */
function buildSlideshow(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myarr = JSON.parse(this.responseText);
			var counter = 0;
			myarr.forEach(function(elt){
				counter++;
				var slideshowHTMLstring = '<div class="slide fade">';
				slideshowHTMLstring += '<div class="slideshow-number-text">' + counter + '/' + myarr.length + '</div>';
				slideshowHTMLstring += '<img src="/app/public/images/projectCovers/' + elt.img + '.png" style="width:100%">';
				slideshowHTMLstring += '<div class="slideshow-caption-text">' + elt.desc + '</div>';
				slideshowHTMLstring += '</div>';
				document.getElementById('slideshow-container').innerHTML += slideshowHTMLstring;
				var dotsHTMLstring = '<span class="dot" onclick="currentSlide('+counter+')"></span>';
				document.getElementById('dots').innerHTML += dotsHTMLstring;
			});
		}
	};
	xmlhttp.open("GET", "/app/public/pageContent/projects.txt", true);
	xmlhttp.send();
}
// buildSlideshow();