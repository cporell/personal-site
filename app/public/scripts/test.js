function load(){

document.getElementById('feature').innerHTML += 'Hello world <br/>';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		myarr = JSON.parse(this.responseText);
		myarr.forEach(function(elt){
			document.getElementById('feature').innerHTML += '<img class=bioPic src="/app/public/images/' + elt.img + '.jpg"><br/>';
			document.getElementById('feature').innerHTML += elt.title + '<br/>';
			document.getElementById('feature').innerHTML += elt.desc + '<br/>';
			document.getElementById('feature').innerHTML += '<br/>';
		});
	}
};
xmlhttp.open("GET", "/app/public/pageContent/test.txt", true);
xmlhttp.send();
	
}

load();

/*
var data = [
	{
		"img": "nebby",
		"title": "test1",
		"desc": "This is the first test item"
	},
	{
		"img": "nebby",
		"title": "test2",
		"desc": "This is the second test item"
	},
	{
		"img": "nebby",
		"title": "test3",
		"desc": "This is the third test item"
	},
	{
		"img": "nebby",
		"title": "test4",
		"desc": "This is the fourth test item"
	}
];

var parsed = JSON.parse(data);
document.getElementById('feature').innerHTML += parsed[0].img + ", " + parsed[0].title + ", " + parsed[0].desc;
*/