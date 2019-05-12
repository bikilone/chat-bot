var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(4000, function() {
  console.log("listening to request on port 4000");
});

// socket setup
var io = socket(server);

io.on("connection", function(socket) {
  socket.on("connection", function() {
    io.sockets.emit("chat", "Hello there");
  });
  socket.on("chat", function() {
    io.sockets.emit("chat", "Just chating");
  });
});
