var child_process = require('child_process');
var options = {maxBuffer:100*1024, encoding:'utf8', timeout:5000};

var child = child_process.exec('ping.exe', ['-n', '-1', 'google.com'], function(err, stdout, stderr) {
    if(err) {
        console.log(err.stack);
        console.log('Error Code: ' + err.code);
        console.log('Error Signal: ' + err.signal);
    }
    console.log('Results: \n' + stdout);
    if(stderr.length) {
        console.log('Errors: \n' + stderr);
    }
});
child.on('exit', function(code) {
    console.log('Child completed with code: ' + code);
});
