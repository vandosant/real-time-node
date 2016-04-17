var http = require('http');
var ASQ = require('asynquence');
var host = 'localhost';
var port = 8000;
var httpServer = http.createServer(handleHTTP).listen(port, host);
function handleHTTP(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, {"Content-type": "text/plain"});
      ASQ()
      .then(function(done) {
        setTimeout(function () {
          done(Math.random());
        }, 500)
      }).then(function(done, rand) {
        setTimeout(function () {
          done("Hello World: " + rand);
        }, 500)
      }).then(function(done, str) {
        res.write(str)
        res.end();
      })
    } else {
      res.writeHead(403);
      res.end();
    }
  } else {
    res.writeHead(403);
    res.end();
  }
}

