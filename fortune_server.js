var net = require('net');

var fortune = ["Pass go", "that person in front of you, kiss them.", "play the lotto" , "when you are lost, take the right turn" , "go to church"];
var connections = [];

var server = net.createServer(function(connection){
  connection.write(fortune[Math.floor(Math.random()*5)]);
  connection.end();
  connection.on('error', function(){});
});


var server = net.createServer(function(connection){
  connections.push(connection);
  connection.on('data', function(whatSomeoneTyped) {
    for(var i = 0; i < connections.length; i += 1) {
      connections[i].write(fortune[Math.floor(Math.random()*5)]);
    }
  });
  connection.on('end', function(){
    var myConnection = connections.indexOf(connection);
    connections.splice(myConnection, 1);
  });
});


server.listen(1234);