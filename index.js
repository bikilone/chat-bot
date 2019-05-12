var express = require("express");
var socket = require("socket.io");
const path = require("path");

var app = express();
var server = app.listen(4000, function() {
  console.log("listening to request on port 4000");
});

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "build", "index.html"));
  });
}

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
