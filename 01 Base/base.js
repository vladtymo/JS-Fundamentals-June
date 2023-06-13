// inline comment ...
/* 
    block comment
*/

// -------------- working with console
console.log("Message from the separate js file!");
console.warn("Some warning message!");
console.error("Some error message!");

// -------------- variables
// create variable syntax: let name = value;
let email = "vtymos@softserveinc.com";

// string concatenation: str + str
console.log("My email: " + email);

// string interpolation: `text... ${expression}...`
console.log(`My email: ${email}`);

console.log("Email type:", typeof (email));

// -------------- data types
let username = 'super_programmer';  // string
let price = 120.5;                  // number
let isValid = true;                 // boolean
let emptyObject = null;             // null
let averageMark = undefined;        // undefined

console.log(`Username: ${username}, type: ${typeof (username)}`);
console.log(`Price: ${price}, type: ${typeof (price)}`);
console.log(`Is Valid: ${isValid}, type: ${typeof (isValid)}`);
console.log(`Empty object: ${emptyObject}, type: ${typeof (emptyObject)}`);
console.log(`Undefined value: ${averageMark}, type: ${typeof (averageMark)}`);

// change variable value, old value deleted
price = 90;

// -------------- browser dialogs
alert("Hello from Alert!");

// prompt() - ask value from user and return string type
let color = prompt("Enter your favorite color:");

// ?? - null-condition operator
console.log(`User favorite color is ${color ?? "transparent"}`);

// convert string to number: +string
let currentYear = +prompt("Enter current year:");

console.log(`Next year: ${currentYear + 1}`);

if (isNaN(currentYear))
    console.error("Invalid number format!");

// confirm() - ask user bool value (yes/no)
let isContinue = confirm("Do you want to continue?");

if (isContinue) console.log("Let's go forward!");
else console.log("Stop!");

// -------------- ariphmetic operators: + - * / % **
let number = +prompt("Enter your number:");
console.log(`${number} + ${number} = ${number + number}`);
console.log(`${number} - ${number} = ${number - number}`);
console.log(`${number} * ${number} = ${number * number}`);
console.log(`${number} / ${number} = ${number / number}`);

console.log(`${number} % 2 = ${number % 2}`);   // 11 / 2 = 1
console.log(`${number} ** 3 = ${number ** 3}`); // stepin

number = Infinity;
number = -Infinity;
number = NaN; // Not a Number

// ! - logic invert
if (isValid) console.log("Value is valid");
if (!isValid) console.log("Value is NOT valid");