const fs = require('fs');
const { argv } = require('process');
 
const multiplyByTwo = (number) => number * 2;

const inputArray = fs.readFileSync(argv[2], 'utf-8').split('\n');

inputArray.forEach(input => {
    console.log(multiplyByTwo(input));
});
