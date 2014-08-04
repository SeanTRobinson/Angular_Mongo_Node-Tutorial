var fs = require('fs');
var config = {
    maxFiles: 20,
    maxConnections: 15,
    rootPath: "/webroot"
};

var configText = JSON.stringify(config);
var options = {encoding: 'utf8', flag: 'w'};

fs.writeFile('config.txt', configText, options, function(err) {
    if(err) {
        console.log("Config Write Failed.");
    } else {
        console.log("Config Saved.");
    }
});

