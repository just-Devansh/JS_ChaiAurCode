// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a DYNAMICALLY typed language

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);   //false
// {this means that no matter what value you assign to a symbol, it will always be UNIQUE!}


// Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", 'naagraaj', "doga"];
let myObj = {
    name: "devansh",
    age: 20,
}
// curly braces ke andar jo kuch bhi hai vo object hai

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes); // object
console.log(typeof myObj);  // object
console.log(typeof myFunction);  // function (object function)



