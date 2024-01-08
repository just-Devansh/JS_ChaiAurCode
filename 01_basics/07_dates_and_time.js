// Date is generally calculatd in miliseonds since the ECMAScript epoch (1/1/1970)
// TCS39 is working on a 'Temporal' global object to replace dates

let myDate = new Date()
console.log(typeof myDate); // object
// console.log(myDate); // 2024-01-08T06:00:25.926Z
// console.log(myDate.toString()); // Date ad Time (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Mon Jan 08 2024
// console.log(myDate.toISOString()); // 2024-01-08T06:04:36.547Z
// console.log(myDate.toJSON());      // 2024-01-08T06:04:36.547Z
// console.log(myDate.toLocaleDateString()); // 1/8/2024
// console.log(myDate.toLocaleString());     // 1/8/2024, 6:04:36 AM 
// console.log(myDate.toLocaleTimeString()); // 6:04:36 AM

// let myCreatedDate = new Date(2023, 0, 23) // In JS, month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("02-14-2023")
// console.log(myCreatedDate.toLocaleString()); 


let myTimeStamp = Date.now()  // useful when designing quizzes/polls in js
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // in Seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // 1 because it returns 0 for January
console.log(newDate.getDay()); // 1 because it's a Monday


// we an customize the LocaleString() to our liking using parameters
newDate.toLocaleString('default', {
    weekday: "long",
})




