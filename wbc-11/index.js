'use strict';

const instruction =
`\nSetup:
 $ node
 > const calculateMissing = new require('./lib/calculateMissing');
\nCreate an Array:
 > myArr = [];
 > for (let i = 99; i >= 0; i--) myArr[i] = i + 1;
 > myArr.splice(49, 1);
    // creates an array with numbers 1 - 100, but skips 50
\nCalculate missing values:
 > calculateMissing(myArr);
    // returns 50;
\nExit:
 > .exit\n`;

console.log(instruction);
