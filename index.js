var express     = require('express');
var app         = express();
var server      = require('http').createServer(app);
var io          = require('socket.io')(server);

io.on('connection',function(client){
 client.on("mensajeSocket",function(mensaje){
        client.broadcast.emit("enviarMensaje",mensaje);
    });
});

server.listen(process.env.PORT || 3000);

