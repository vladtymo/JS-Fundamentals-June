// -=-=-=-=-=-=-=- Regular Expressions -=-=-=-=-=-=-=-

//const pattern = new RegExp('[A-Z]+');
let pattern = /^\w+\.?\w+\@\w+\.\w+$/;

// TASK: validate client email address
let email = prompt("Enter your email address:");

while (!pattern.test(email)) {

    console.warn("Invalid email address! Please, try again.");
    email = prompt("Enter email address again:");
}

// test() - returns true/false
// exec() - returns array of matches or null

/* Falgs: 
    g - global (return all matches)
    i - case insensetive
    m - multiline
*/

// TASK: validate group name: GF-45 HH-12
pattern = /[A-Z]{2}-\d{2}/g;

const text = "Hello! Group PS-44 has 12 students! RJ-45, YY-10 also.";

console.log("First match:", pattern.exec(text));
console.log("Second match:", pattern.exec(text));

pattern.lastIndex = 0; // reset index
console.log("Others matches:", Array.from(text.matchAll(pattern)));

console.log("Replaced string:", text.replace(pattern, "$1 XXX"));

// TASK: get all words from the line
const line = "?Hello, Vlad! How are you? Fine.";

// words: Hello Vlad How...
const words = line.split(/[,.\s!?]+/).filter(x => x.match(/\S/));

console.log("Words:", words);


// First, JavaScript!
// 