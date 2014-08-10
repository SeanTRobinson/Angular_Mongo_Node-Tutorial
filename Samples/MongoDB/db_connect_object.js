var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost', 27017, {
                                     socketOptions: { connectTimeoutMS: 500 },
                                     poolSize: 5,
                                     auto_reconnect: true
                                 }, {
                                     numberOfRetries: 3,
                                     retryMilliSeconds: 500
                                 }));

client.open(function(err, client) {
    if(err) {
        console.log("Connection failed via client object ...");
    } else {
        var db = client.db("test");
        if(db) {
            console.log("Connected via client object ...");
            db.authenticate("dbAdmin", "Speakers#7dba", function(err, results) {
                if(err) {
                    console.log("Authentication failed ...");
                    client.close();
                    console.log("Connection closed ...");
                } else {
                    console.log("Authenticated via client object ...");
                    db.logout(function(err, result) {
                        if(!err) {
                            console.log("Logged out via client object ...");
                        }
                        client.close();
                        console.log("Connection close ...");
                    });
                }
            });
        }
    }
});
