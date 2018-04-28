var loki = require('lokijs');

// var db = new loki('loki.json');
// var children = db.addCollection('children');

// children.insert({name: 'Sleipnir', legs:8});
// children.insert({name: 'Jormungandr', legs:0});
// children.insert({name: 'Hel', legs: 2});

// console.log(children.get(1));
// console.log(children.find({'name' : 'Sleipnir'}));
// console.log(children.find({legs: { '$gt':2}}));

var pagesDB = new loki('pageContent.db');
pagesDB.loadDatabase({}, load);

function load(){
    var pageContents = pagesDB.getCollection('pageContent') || pagesDB.addCollection('pageContent');
    if(pageContents.data.length === 0){
        pageContents.insert({
            "type": "subsites",
            "img": "whats-new",
            "title": "What's New in Wizard101",
            "desc": "A catch-up for new/returning Wizard101 players, created for the /r/wizard101 community."
        });
        pageContents.insert({
            "type": "projects",
            "img": "infiltration",
            "title": "Community Infiltration",
            "desc": "An investigative infiltration into an online community to research conflicts in said community."
        });
        pageContents.insert({
            "type": "projects",
            "img": "good_bad_difficulty",
            "title": "Good and Bad Difficulty in Games",
            "desc": "A talk given to WPI's Game Developers Association on the difference between good and bad difficulty in games."
        });
    }

    console.log(pageContents.get(1));
    console.log(pageContents.find({'img': 'good_bad_difficulty'}));
    console.log(pageContents.get(3));
}
//var pageContent = pagesDB.getCollection('pageContent');
//console.log(pageContent.get(0));