var express = require('express');
var url = require('url');
var app = express();

app.listen(80);

app.get('/image', function(req, res) {
    res.sendFile('arch.jpg', {
        maxAge: 1, //24*60*60*1000
        root: './'
    }, function(err) {
        if(err) {
            console.log('Failure');
        } else {
            console.log('Success');
        }
    });
});
