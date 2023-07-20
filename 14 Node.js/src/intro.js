// npm i - install all dependencies (modules)

console.log("Hello Node.js!");

let a = 10, b = 20;
console.log(a + b);

// DOM does not presented

// local scope
var email = "example@ukr.net";

// we have [global] in Node.js instead of [window] in browser
// global scope
global.username = "global_name";
console.log(global);
