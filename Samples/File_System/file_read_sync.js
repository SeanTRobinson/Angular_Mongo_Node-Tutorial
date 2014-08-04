var fs = require('fs');
fd = fs.openSync('veggie.txt', 'r');
var veggies = [];

do {
    var buf = new Buffer(5);
    buf.fill();
    var bytes = fs.readSync(fd, buf, null, 5);
    console.log("Read %sbytes", bytes);
    veggies += buf.toString();
    console.log(veggies);
} while (bytes > 0);

fs.close(fd);
console.log("Veggies: " + veggies);
