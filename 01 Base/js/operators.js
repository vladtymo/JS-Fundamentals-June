// -=-=-=-=-=-=-=- operators -=-=-=-=-=-=-=-

// ariphmetic operators: + - * / %

console.log(`a + b: ${5 + 3}`); // 8
console.log(`a - b: ${5 - 3}`); // 2
console.log(`a * b: ${5 * 3}`); // 15
console.log(`a / b: ${20 / 4}`); // 1.xxx
console.log(`a % b: ${5 % 3}`); // 2

// exponentiation: **
console.log(`a ** b: ${2 ** 8}`);

// logic operators: > < >= <= == !=

console.log(`a > b: ${5 > 3}`); // true
console.log(`a < b: ${5 < 3}`); // false
console.log(`a >= b: ${5 >= 3}`); // true
console.log(`a <= b: ${20 <= 20}`); // true

// weak comparison - compare value only
console.log(`a == b: ${'5' == 5}`); // true
console.log(`a != b: ${5 != 3}`); // true

// strict - compare types also
console.log(`a === b: ${'5' === 5}`); // false
console.log(`a !== b: ${5 !== 3}`); // true

// false: 0 undefined null NaN "" 
console.log('1' == true);  // true
console.log('1' === true); // false

let salary = 1300, bonus = 80;

//salary = salary + bonus;
// ------------- change operators: += -= *= /= %=
salary += bonus;

//salary += 1;
// ------------- increment / decrement operators: ++ --
// 1 - prefix: ++value (high priority)
// 2 - postfix: value++ (low priority)

let copy = salary++;

console.log("Salary: ", salary);
console.log("Copy: ", copy);

// ------------- type conversion
let invalidNumber = NaN;

// to boolean: Boolean(value) !!value
console.log(!!NaN);
console.log("Boolean of NaN: ", Boolean(NaN) == false);

if (invalidNumber) console.log("True");
else console.log("False");

// to number: +value Number(value)
let number = Number("123");

// to integer: parseInt(value)
// to real: parseFloat(value)
console.log(parseInt("34.99")); // 34
console.log(parseFloat("34.99")); // 34.99

console.log("34.99" + 1); // 34.991
console.log("34.99" - 1); // 33.99

console.log("5" * 2); // 10
