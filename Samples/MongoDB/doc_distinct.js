var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
    var myDB = db.db("words");
    myDB.collection("word_stats", distinctValues);
    setTimeout(function() {
        db.close();
    }, 3000);
});

function distinctValues(err, words) {
    words.distinct('size', function(err, values) {
        console.log("Sizes of words: " + values);
    });

    words.distinct('first', {last: 'u'}, function(err, values) {
        console.log("First letters of words ending with 'u':" + values);
    });

    words.distinct('stats.vowels', function(err, values) {
        console.log("Numbers of vowels in words: " + values);
    });
}
