var app = require('express')();
var http = require('http').Server(app);
var io= require('socket.io')(http);
var server= require('http').createServer(app);
port= process.env.PORT || 3000;

io.on('connection', function(socket){
  console.log("Client connected...");
  
    client.on("mensajeSocket",function(mensaje){
      console.log("Mensaje: "+mensaje);
      client.broadcast.emit("enviarMensaje",mensaje);
  });
  });
  
server.listen(port, function(){
  console.log('listening on *:3000');
});