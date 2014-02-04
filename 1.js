
var http = require('http');

http.createServer(function (req, res) {
    res.end("Hello, Michigan Hackers");
}).listen(1024);

console.log('Starting Server');