var child_process = require('child_process');
var options = {
    env: {user: 'Brad'},
    encoding: 'utf8'
};

function makeChild() {
    var child = child_process.fork('chef.js', [], options);
    child.on('message', function(message) {
        console.log('Served: ' + message);
    });
    return child;
}

function sendCommand(child, command) {
    console.log('Requesting: ' + command);
    child.send({cmd:command});
}

var c1 = makeChild();
var c2 = makeChild();
var c3 = makeChild();

sendCommand(c1, "makeBreakfast");
sendCommand(c2, "makeLunch");
sendCommand(c3, "makeDinner");
