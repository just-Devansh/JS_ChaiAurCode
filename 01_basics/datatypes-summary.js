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

// console.log(typeof heroes); // object
// console.log(typeof myObj);  // object
// console.log(typeof myFunction);  // function (object function)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive) 

let myYoutubeName = "devanshGaurav"
let anotherName = myYoutubeName
anotherName = "devansh"
console.log(myYoutubeName);
console.log(anotherName);

// ALL OF THIS HAPPENS IN THE STACK WHERE A COPY OF THE DATATYPE IS MADE
// HENCE THE CHANGE ONLY OCCURS IN THE SECOND NAME AND NOT IN THE ORIGINAL NAME

let user1 = {
    email: "user1@jbl.com",
    upi: "user@sbi"
}
let user2 = user1
user2.email = "user1@boat.com"
s
console.log(user1.email);
console.log(user2.email);

// HERE HEAP IS INVOLVED. HERE WE PASS BY REFERENCE AND HENCE
// CHANGING USER2 DATA ALSO CHANGES USER1 DATA!