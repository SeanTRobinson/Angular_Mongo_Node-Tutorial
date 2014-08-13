var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
    var myDB = db.db("astro");
    myDB.collection("nebulae", function(err, nebulae) {
        nebulae.find({type: 'Planetary'}, function(err, items) {
            items.toArray(function(err, itemArray) {
                console.log("Before Update: ");
                console.log(itemArray);
                nebulae.update( {type: 'Planetary', $isolated:1},
                    {$set: {type:'Planetary', updated: true}},
                    {upsert: false, multi:true, w:1},
                    function(err, results) {
                        nebulae.find( {type: 'Planetary'}, function(err, items) {
                            items.toArray(function(err, itemArray) {
                                console.log("After Update: ");
                                console.log(itemArray);
                                db.close();
                            });
                        });
                    
                });
            });
        });
    });
});
