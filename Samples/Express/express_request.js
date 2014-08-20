var express = require('express');
var app = express();

app.listen(80);

app.get("/user/:userid", function(req, res) {
    console.log("URL:\t" + req.originalUrl);
    console.log("Protocol:\t" + req.protocol);
    console.log("IP:\t" + req.ip);
    console.log("Path:\t" + req.path);
    console.log("Host:\t" + req.host);
    console.log("Method:\t" + req.method);
    console.log("Query:\t" + JSON.stringify(req.query));
    console.log("Fresh:\t" + res.fresh);
    console.log("Stale:\t" + req.stale);
    console.log("Secure:\t" + req.secure);
    console.log("UTF8:\t" + req.acceptsCharset("utf8"));
    console.log("Connection:\t" + req.get("connection"));
    console.log("Headers:\t" + JSON.stringify(req.headers, null, 2));
    res.send("User Request");
});












    
