var zlib = require('zlib');
var input = "...............text................";
zlib.deflate(input, function(err, buffer) {
    if(!err) {
        console.log("Deflate (%s): ", buffer.length, buffer.toString('base64'));
        zlib.inflate(buffer, function(err, buffer) {
            if(!err) {
                console.log("Inflate (%s): ", buffer.length, buffer.toString());
            }
        });

        zlib.unzip(buffer, function(err, buffer) {
            if(!err) {
                console.log("Unzip deflate (%s): ", buffer.length, buffer.toString());
            }
        });
    }
});

zlib.deflateRaw(input, function(err, buffer) {
    if(!err) {
        console.log("Deflate Raw (%s): ", buffer.length, buffer.toString('base64'));
        zlib.inflateRaw(buffer, function(err, buffer) {
            if(!err) {
                console.log("Inflate Raw (%s): ", buffer.length, buffer.toString());
            }
        });
    }
});

zlib.gzip(input, function(err, buffer) {
    if(!err) {
        console.log("Gzip (%s): ", buffer.length, buffer.toString('base64'));
        zlib.gunzip(buffer, function(err, buffer) {
            if(!err) {
                console.log("GUnzip (%s): ", buffer.length, buffer.toString());
            }
        });

        zlib.unzip(buffer, function(err, buffer) {
            if(!err) {
                console.log("Unzip (%s): ", buffer.length, buffer.toString());
            }
        });
    }
});
