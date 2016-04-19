var http = require('http');
var ASQ = require('asynquence');
var nodeStatic = require("node-static");

var host = 'localhost';
var port = 8000;

var staticFiles = new nodeStatic.Server(__dirname);


var httpServer = http.createServer(handleHTTP).listen(port, host);
var io = require("socket.io").listen(httpServer);
io.on("connection", handleIO);

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

function handleIO(socket) {
  // called for every incoming socket conn
  console.log("client connected");
  socket.on("disconnect", disconnect);
  var interval = setInterval(function () {
    socket.emit("hello", Math.random());
  }, 1000);
  function disconnect() { 
    console.log("client disconnected");
    clearInterval(interval)
  }
}

io.configure(function() {
  io.enable("browser client minification");
  io.enable("browser client etag");
  io.set("log level", 1);
  io.set("transports", [
	  "websocket",
	  "xhr-polling",
	  "jsonp-polling"
  ]);
});
