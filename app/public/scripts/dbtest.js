var loki = require('lokijs');

// var db = new loki('loki.json');
// var children = db.addCollection('children');

// children.insert({name: 'Sleipnir', legs:8});
// children.insert({name: 'Jormungandr', legs:0});
// children.insert({name: 'Hel', legs: 2});

// console.log(children.get(1));
// console.log(children.find({'name' : 'Sleipnir'}));
// console.log(children.find({legs: { '$gt':2}}));

var pagesDB = new loki('/app/public/pageContent/pageContent.db');
var pageContent = pagesDB.getCollection('pageContent');
console.log(pageContent.get(0));