// -=-=-=-=-=-=-=- Memory Management -=-=-=-=-=-=-=-
let title = document.querySelector('h1');
title.remove();

// remove title? - No

let number = 10; // memory allocation
let c = number;

let user = { id: 1001, login: 'super' }; // memory allocation
let admin = user; // assign reference

// memory usage...
number = Math.pow(number, 2);

// clear resources
// GC - Garbage Collector

if (number > 10) {
    let msg = "Greather than 10";
    console.log(msg);
}

//console.log(msg); // cannot access msg
// remove "Greather than 10"? - Yes

number = null;
// remove 10? - Yes
console.log(number);

user = null;
console.log(admin);
// remove { id: 1001, login: 'super' }? - No

admin = null;
// remove { id: 1001, login: 'super' }? - Yes
