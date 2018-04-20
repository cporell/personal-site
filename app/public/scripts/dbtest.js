var db = new PouchDB('http://localhost:4000/testing');
db.info().then(function(info){
    console.log(info);
});