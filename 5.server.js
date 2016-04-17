var http = require('http');

var host = 'localhost';
var port = 8000;
var httpServer = http.createServer(handleHTTP).listen(port, host);
function handleHTTP(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, {"Content-type": "text/plain"});
      var rand = 0;
      var hello = null;
      setTimeout(function() { 
        rand = Math.random();
        setTimeout(function() {
          hello = "Hello World " + rand;
          res.write(hello);
          res.end();
        }, 500);
       }, 500);
    } else {
      res.writeHead(403);
      res.end();
    }
  } else {
    res.writeHead(403);
    res.end();
  }
}

