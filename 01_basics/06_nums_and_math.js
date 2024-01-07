const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // toString() converts the Number into String
// console.log(balance.toFixed(2)); // limit precision

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // adds commas to the number => 10,00,000

// ++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(2.3)); // 2
// console.log(Math.round(2.8)); // 3
// console.log(Math.ceil(2.2));  // 3
// console.log(Math.floor(2.9)); // 2
// console.log(Math.min(5,6,7)); // 5
// console.log(Math.max(50,60,70)); // 70

console.log(Math.random()); // returns a random number from 0 to 1
console.log((Math.random()*10) + 1); // returns random no from 1 to 10
console.log(Math.floor(Math.random()*10) + 1); // returns a random integer

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Formula for finding a random integer in a given range (max, min)

