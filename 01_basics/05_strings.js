const name = "devansh"
const repoCount = 50

// console.log(name + repoCount + "value");
// alternative syntax :
// console.log(`Hello. My name is ${name} and my repo count is ${repoCount}`);

// Alternative way of declaring a string
const gameName = new String('devansh-gaurav-020120')
console.log(gameName[0]);
console.log(gameName.__proto__); // {}

console.log(gameName.length);
console.log(gameName.toUpperCase()); // ORIGINAL STRING DID NOT GET CHANGED
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,3) // excluding 3 (excluding the end index)
console.log(newString);

const anotherString = gameName.slice(-13,4) // similar to substring() but also accepts negative values
console.log(anotherString);

const newStringOne = "    devansh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims unwanted spaces

const url = "https://devansh.com/devansh%20gaurav"
console.log(url.replace('%20', '-'));  // replaces the first parameter with the second parameter
console.log(url.includes('devansh'));

console.log(gameName.split('-')); 
// Split function needs a separator. It splits the string into an array.

