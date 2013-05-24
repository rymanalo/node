var net = require('net');

var server = net.createServer(function(connection){
  console.log("Someone asked for the time");
  var date = new Date();
  connection.write(date.toString() + "\n");
  connection.end();
  connection.on('error', function(){});
});

console.log("Server is listening");
server.listen(1234);