var args = require("minimist")(process.argv.slice(2), { string: "file"} );

function printHelp() {
  console.log("3.js (c) Scott Skender");
  console.log("");
  console.log("usage:");
  console.log("--help	print this help");
  console.log("--file={NAME} 	read file of {NAME} and output");
  console.log("");
}

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld3");

hello.say(args.file)
.val(function(msg){
		console.log(msg.toString());
})
.or(function(err){
		console.error("Error: " + err);
});
