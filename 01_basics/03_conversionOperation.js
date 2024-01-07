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
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ****************** Operations ********************
let value = 3
let negValue = -value

// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(3**2);
// console.log(3/2);
// console.log(3%2);

let str1 = "hello"
let str2 = " devansh"
let str3 = str1 + str2 
// console.log(str3); // hello devansh

// console.log("1" + 2);            // 12
// console.log(1 + "2");           // 12   
// console.log("1" + 2 + 2);      // 122
// console.log(1 + 2 + "2");     // 32 (Interesting right?)

// console.log(+true); // 1
// console.log(+"");  // 0 ("" => false (in boolean))

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

