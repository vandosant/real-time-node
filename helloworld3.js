function readFile(filename) {
  return ASQ(function(done) {
    var stream = fs.createReadStream(filename);
    var content = "";

    stream.on("data", function(chunk) {
      content += chunk;
    })
    stream.on("end", function() {
      done(content);
    });
  });
}

function delayMsg(done, contents) {
  setTimeout(function() {
    done(contents);
  }, 1000);
}

function say(filename, cb) {
  return readFile(filename)
    .then(delayMsg);
}

var fs = require("fs");
var ASQ = require("asynquence");

module.exports.say = say;
