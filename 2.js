var args = require("minimist")(process.argv.slice(2), { string: "file"} );

function printHelp() {
  console.log("2.js (c) Scott Skender");
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

var hello = require("./helloworld");

var contents = hello.say(args.file, function(err, contents) {
  if (err) {
    console.error(err);
  } else {
    console.log(contents.toString());
  }
});
