var express = require('express'),
    jade = require('jade'),
    ejs = require('ejs');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', jade.__express);
app.engine('html', ejs.renderFile);
app.listen(80);

app.locals = {
    uname: 'Sean',
    vehicle: 'Mondeo',
    terrain: 'Road',
    climate: 'Valleys',
    location: 'Driveway'
};

app.get('/jade', function(req, res) {
    res.render('user_jade');
});

app.get('/ejs', function(req, res) {
    app.render('user_ejs.html', function(err, renderedData) {
        res.send(renderedData);
    });
});
