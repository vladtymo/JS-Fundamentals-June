// -=-=-=-=-=-=-=- Loops -=-=-=-=-=-=-=-

// ----- while - цикл з передумовою
// syntax: while(condition) { ...code... }

// вічний цикл: цикл, в якого умова завжди = true

let a = 1; // initialize

while (a < 10) { // condition
    // iteration
    console.log(`[${a}] - One more iteration...`);
    ++a; // expression
}

console.warn("Finish!");

// ідентичне виконання за допомогою циклу for

// ----- for - цикл, який виконується певну кількість разів
// for(initialize; condition; expression) { ...code... }
for (let i = 1; i < 10; ++i) {
    if (i % 4 === 0) continue;
    console.log(`[${i}] - One more iteration...`);

    // break - ends the loop
    // continue - skips current iteration
    if (i % 7 === 0) break;
}

console.log(`a = ${a}`); // 10
//console.log(i); // is not defined

// виконати цикл, до поки користувач введе позитивне число
while (+prompt("Enter your number:") > 0) {
    console.log('Great!');
}

// ----- do while() - цикл з післяумовою
// syntax: do while() { ...code... }

// запросити введення числа, поки воно не буде позитивним
let number;
do {
    number = +prompt("Enter a positive number:");
} while (number < 0);

console.log("Thanks!");

// TASK: show collection of pairs: 1 - 10, 2 - 9, 3 - 8
for (let start = 1, end = 10; start <= 10; ++start, --end)
    console.log(`${start} - ${end}`);

// ----- for in - iterate all object keys
// syntax: for (variable in object) {}
let array = [4, 6, 2, 6, -8, 0, 85, 120, 3];
let user = {
    username: 'bob228',
    address: 'Rivne, Ukraine',
    id: 22
};

array.push(30);
// [10], [11] = undefined
array[12] = 40;

console.log("Array:", array);

console.log('Array indexes:');
for (let ind in array) {
    console.log(`Key: ${ind}`); // 0...9,12
}

console.log('User properties:');
for (const prop in user) {
    console.log(`Property: ${prop}`); // username, address, id
}

console.log('Array values:');

let newArr = [];

// ----- for of - iterate all values of the object
for (let elem of array) {
    ++elem; // change copy, does not effect to original array
    console.log(`Element: ${elem}`);
}
// show array
console.log(array);

// TASK: додати в масив 10 цін з випадковим значенням від 0 до 100
let prices = [];

console.log(Math.random()); // 0...1 (0.5, 0.999)

for (let i = 0; i < 3; ++i) {
    let value = Math.floor(Math.random() * 100);
    prices.push(value); // [0..100)
}

for (const price of prices) {
    console.log(`Price: ${price}$`);
}

// TASK: get summ of all prices in the array, when price > 50
let summ = 0;

// 1 - using for loop
// for (let i = 0; i < prices.length; ++i) {
//     if (prices[i] > 50)
//         summ += prices[i];
// }
// 2 - using for of
// for (const item of prices) {
//     if (item > 50)
//         summ += item;
// }
// 3 - using .forEach()
prices.forEach((item) => {
    if (item > 50)
        summ += item;
});

console.log("Summ:", summ);
