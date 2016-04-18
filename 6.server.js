var http = require('http');
var ASQ = require('asynquence');
var nodeStatic = require("node-static");
var host = 'localhost';
var port = 8000;

var staticFiles = new nodeStatic.Server(__dirname);


var httpServer = http.createServer(handleHTTP).listen(port, host);
function handleHTTP(req, res) {
  if (req.method === "GET") {
    if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
		req.addListener("end",function(){
			req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
			staticFiles.serve(req,res);
		});
		req.resume();
    } else {
      res.writeHead(403);
      res.end();
    }
  } else {
    res.writeHead(403);
    res.end();
  }
}

