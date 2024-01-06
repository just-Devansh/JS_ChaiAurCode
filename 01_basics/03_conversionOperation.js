// DATATYPE CONVERSIONS
let score = "33abc"

//console.log(typeof score);  
//console.log(typeof (score));  

// Converting into NUMBER
let valueInNumber = Number(score) //type conversion
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (strange!)
// null => 0 (strange!)
// true/false => 1/0

// Converting into BOOL
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "devansh" => true

// Converting into STRING
let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

