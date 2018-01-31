`use strict`;

const loop = require('./lib/loop');
const argv = require('process').argv;

if ( argv.length < 4 || argv.length > 4 ) {
  argv.splice(0,2);
  console.log(`\nYou entered: node index \n\nExpected format is: node index <count(max 50)> "<string>"\n`);
}

const count = argv[2];
const output = argv[3];

loop(count, function() {
 console.log(output);
});
