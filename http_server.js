var http = require('http');

var server = http.createServer(function( requests, response){
  response.writeHead(200, {"Content-type" : "text/html"});
  response.write("<!doctype html> <html><body>Hello</body></html>\n");
  response.end();
});

server.listen(1234);