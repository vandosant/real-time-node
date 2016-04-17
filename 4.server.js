var http = require('http');

var host = 'localhost';
var port = 8000;
var httpServer = http.createServer(handleHTTP).listen(port, host);
function handleHTTP(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, {"Content-type": "text/plain"});
      res.write("Hello World");
      res.end(Math.random().toString());
    } else {
      res.writeHead(403);
      res.end();
    }
  } else {
    res.writeHead(403);
    res.end();
  }
}
