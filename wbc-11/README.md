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


# Big O analysis:

**O(N)**

```
const calculateMissing = module.exports = function(numArr) {
  if (numArr.length < 99) throw new Error('Invalid input: array is too short');
    // O(1)
  if (numArr.length > 100) throw new Error('Invalid input: array is too long');
    // O(1)
  const sum = numArr.reduce((a, b) => { return a + b });
    // O(N)
  if (isNaN(sum) || numArr.includes(null)) throw new Error('Invalid input: array must only contain numbers');
    // O(N)
  return 5050 - sum;
    // O(1)
};
```
