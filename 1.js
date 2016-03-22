var args = require("minimist")(process.argv.slice(2), { string: "name"} );

var name = args.name;

function printHelp() {
  console.log("1.js (c) Scott Skender");
  console.log("");
  console.log("usage:");
  console.log("--help	print this help");
  console.log("--name 	say hello to {NAME}");
  console.log("");
}

if (!name || args.help) {
  printHelp();
  process.exit(1);
}
console.log("Hello " + name);
