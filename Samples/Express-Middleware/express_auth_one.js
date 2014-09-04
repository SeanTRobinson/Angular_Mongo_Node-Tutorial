var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();

app.listen(80);

var auth = basicAuth(function(user, pass) {
    return (user === 'user1' && pass === 'test');
});

app.get('/library', function(req, res) {
    res.send('Welcome to the Library!');
});

app.get('/restricted', auth, function(req, res) {
    res.send('Welcome to the restricted section!');
});
