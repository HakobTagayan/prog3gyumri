// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// var messages = [];

// app.use(express.static("."));
// app.get('/', function (req, res) {
//    res.redirect('index.html');
// });
// server.listen(3000);

// io.on('connection', function (socket) {
//    for(var i in messages) {
//      io.sockets.emit("display message", messages[i]);
//    }

//    //2-rd es mekna shxatum
//    socket.on("send message", function (data) {
//        messages.push(data);
//        io.sockets.emit("display message", data);
//    });
// });


//chat draw
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coordinates = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
   for(var i in coordinates) {
     io.sockets.emit("display coordinates", coordinates[i]);
   }
   socket.on("send coordinates", function (data) {
       coordinates.push(data);
       io.sockets.emit("display coordinates", data);
   });
});