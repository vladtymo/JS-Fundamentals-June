// ------------- arrays
//let array = new Array();
//let array = [];

let colors = ["red", "green", "blue", "black"];
const mixed = [120, null, "hello", true, [1, 2, 3], { id: 1002, title: "Super" }];

// access by index: 0>
console.log("Colors: ", colors);

colors[0] = "yellow";
console.log("First color: ", colors[0]);
console.log("Mixed arr length: ", mixed.length); // 6

console.log("Is Array: ", Array.isArray(colors));

// ------------ methods
colors.pop();           // remove last
colors.push("purple");  // insert last
colors.shift();         // remove first
colors.unshift("brown");// insert first

console.log("Colors: ", colors);

let numbers = [4, 1, 60, -1, 0, -3, 99, 120, 1, -4, 44, -10];

console.log("Index of 0: ", numbers.indexOf(1)); // 1
console.log("Last Index of 0: ", numbers.lastIndexOf(1)); // 1

let firstHalf = numbers.slice(0, numbers.length / 2);
console.log("First Half:", firstHalf);

console.log("After aplice:", numbers.splice(1, 3));

numbers.sort(); // lexicograph mode
console.log("Numbers:", numbers);

// comparison result: 
// 0 - element are equals
// <0 - 1st < 2st
// >0 - 1st > 2st
numbers.sort((a, b) => a - b);
console.log("Numbers:", numbers);

//numbers.fill(7, 1, 3);
//console.log("Numbers:", numbers);

console.log("Filtered: ", numbers.filter((x) => x < 0));

console.log("Mapped:", numbers.map((x) => x + "!"));

// we can use method chain: method1().method2()
console.log(numbers.slice(3, 7).map(x => x * x));

console.log("Reversed:", numbers.reverse());

// 1 + 2 + 3 = 6
const summ = numbers.reduce((result, current) => result + current, 0);
console.log("Summ:", summ);

// [r]ed + [g]reen + [b]lue = rgb
const letters = colors.reduce((r, c) => r + c[0], '');
console.log("Letters:", letters);
