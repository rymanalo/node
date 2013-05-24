// var http = require('http');

// var server = http.createServer(function( requests, response){
//   response.writeHead(200, {"Content-type" : "application/javascript"});
//   response.write("Hello\n");
//   response.end();
// });

var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.end('myjsonp([10, 31, 18, 19, 42, 35, 8])');
});

server.listen(80);