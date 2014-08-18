var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
    var myDB = db.db("words");
    myDB.collection("word_stats", countItems);
    setTimeout(function() {
        db.close();
     }, 3000);
});

function countItems(err, words) {
    words.count( {first: {$in: ['a', 'b', 'c']}}, function(err, count) {
        console.log("Words starting with either a, b or c: " + count);
    });

    words.count( {size: {$gt: 12}}, function(err, count) {
        console.log("Words longer than 12 characters: " + count);
    });

    words.count( {size: {$mod: [2,0]}}, function(err, count) {
        console.log("Words of even length: " + count);
    });

    words.count( {letters: {$size: 12}}, function(err, count) {
        console.log("Words with 12 distinct characters: " + count);
    });

    words.count( {$and:  [    {first: {$in: ['a', 'e', 'i', 'o', 'u']}}, 
                              {last: {$in: ['a', 'e', 'i', 'o', 'u']}}
                        ]}, function(err, count) {
        console.log("Words beginning and ending with a vowel: " + count);
    });

    words.count( {"stats.vowels": {$gt: 6}}, function(err, count) {
        console.log("Words containing 7 or more vowels: " + count);
    });

    words.count( {letters: {$all: ['a', 'e', 'i', 'o', 'u']}}, function(err, count) {
        console.log("Words containing all vowels: " + count);
    });

    words.count( {otherChars: {$exists: true}}, function(err, count) {
        console.log("Word containing non-alphabet chars: " + count);
    });

    words.count( {charsets: {$elemMatch: {$and: [{type: 'other'}, {chars: {$size: 2}}]}}}, function(err, count) {
        console.log("Words with 2 non-alphabet chars: " + count);
    });
}


