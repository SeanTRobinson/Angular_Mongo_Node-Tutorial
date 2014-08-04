var fs = require('fs');

fs.stat('file_stats.js', function(err, stats) {
    if(!err) {
        console.log("Stats: " + JSON.stringify(stats, null, ' '));
        console.log(stats.isFile() ? "Is a file" : "Isn't a file");
        console.log(stats.isDirectory() ? "Is a directory." : "Isn't a directory.");
        console.log(stats.isSocket() ? "Is a socket." : "Isn't a socket.");
        stats.isDirectory();
        stats.isBlockDevice();
        stats.isCharacterDevice();
        stats.isFIFO();
        stats.isSocket();
    }
});
