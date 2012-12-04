var http = require('http'),
    io = require('socket.io');

function handler(request, response){
  console.log('good');
}
server = http.createServer();
server.listen(3000);
io = io.listen(server);
io.sockets.on('connection', function(){
 console.log('aaaa');
});
