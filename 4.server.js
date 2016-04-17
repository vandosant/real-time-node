var http = require('http');

var host = 'localhost';
var port = 8000;
var httpServer = http.createServer(handleHTTP).listen(port, host);
function handleHTTP(req, res) {
  res.end("Hello World");
}
