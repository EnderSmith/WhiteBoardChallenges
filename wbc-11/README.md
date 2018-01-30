# WBC 11

_You have an integer array which contains numbers from 1 to 100 but one number is missing, you need to write a function calculateMissing = (array) => {...} to find that missing number in an array._

## Setup:
 `$ node`
 `> const calculateMissing = new require('./lib/calculateMissing');`
## Create an Array:
 `> myArr = [];`

 `> for (let i = 99; i >= 0; i--) myArr[i] = i + 1;`

 `> myArr.splice(49, 1);`

 `   // creates an array with numbers 1 - 100, but skips 50`

## Calculate missing values:

 `> calculateMissing(myArr);`

 `   // returns 50;`

## Exit:
 `> .exit`
