var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function() {
    var query = Words.findOne().where('word', 'book');
    query.exec(function(err, doc) {
        console.log("Is document new?: " + doc.isNew);
        console.log("Before Save: ");
        console.log(doc.toJSON());
        doc.set('word', 'Book');
        doc.set('first', 'B');
        console.log("Modifed Fields: ");
        console.log(doc.modifiedPaths());
        doc.save(function(err) {
            Words.findOne( {word: 'book'}, function(err, doc) {
                console.log("After Save: ");
                console.log(doc.toJSON());
                mongoose.disconnect();
            });
        });
    });
});
