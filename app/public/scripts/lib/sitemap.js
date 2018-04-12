/**
 * Created by CPORELL on 9/28/2017.
 */
var sitemapHidden = false;
var sitemapFlexBasis = 18;
var featureFlexBasisShort = 58;
var featureFlexBasisFull = 68;
var bioFlexBasisShort = 24;
var bioFlexBasisFull = 32;

document.getElementById('sitemap-toggle').onclick = function(){
    if(sitemapHidden){
        sitemapHidden = false;
        document.getElementById('sitemap-toggle').className = "arrow left";
        document.getElementById('sitemap-content').style.display = "block";
        document.getElementById('sitemap').style.flexBasis = sitemapFlexBasis + '%';
        document.getElementById('feature').style.flexBasis = featureFlexBasisShort + '%';
        document.getElementById('bio').style.flexBasis = bioFlexBasisShort + '%';
        return;
    }
    else {
        sitemapHidden = true;
        document.getElementById('sitemap-toggle').className = "arrow right";
        document.getElementById('sitemap-content').style.display = "none";
        document.getElementById('sitemap').style.flexBasis = '0%';
        document.getElementById('feature').style.flexBasis = featureFlexBasisFull + '%';
        document.getElementById('bio').style.flexBasis = bioFlexBasisFull + '%';
        return;
    }
}

function populateSitemap() {
    var sitemap = document.getElementById('sitemap-content');
    sitemap.innerHTML = '<h3>Games</h3>';
    sitemap.innerHTML += '<p id="sitemap-games">';
    gatherContent('games');
    sitemap.innerHTML += '</p>';
    sitemap.innerHTML += '<hr>';
    sitemap.innerHTML += '<h3>Projects</h3>';
    sitemap.innerHTML += '<p id="sitemap-projects">';
    gatherContent('projects');
    sitemap.innerHTML += '</p>';
    sitemap.innerHTML += '<hr>';
    sitemap.innerHTML += '<h3>Sub-sites</h3>';
    sitemap.innerHTML += '<p id="subsites">';
    document.getElementById('subsites').innerHTML += '<a class="plainTxt" href="/whats-new">What\'s New in Wiz</a><br/>';
    document.getElementById('subsites').innerHTML += '<a class="plainTxt" href="/sprints">Sprints Until Christmas</a><br/>';
    document.getElementById('subsites').innerHTML += '<a class="plainTxt" href="/hottakes">R501 Game of Thrones Theories</a><br/>';
    sitemap.innerHTML += '</p>';
}

function gatherContent(contentType){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            JSON.parse(this.responseText).forEach(function(elt){
                document.getElementById('sitemap-' + contentType).innerHTML += '<a class="plainTxt" href="/' + contentType + '/' + elt.title + '">' +  elt.title + '</a><br/>';
            });
        }
    };
    xmlhttp.open('GET', '/app/public/pageContent/' + contentType + '.txt', true);
    xmlhttp.send();
}

populateSitemap();