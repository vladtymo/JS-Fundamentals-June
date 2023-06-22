// -=-=-=-=-=-=-=- exceptions -=-=-=-=-=-=-=-

// try {...} catch {...}

try {
    console.log("Start try block!");

    let num = 10.456789;
    //console.log(email);           // ReferenceError
    num.pop();                      // TypeError
    console.log(num.toFixed(-2));   // RangeError
    //eval('leg a = 10;');          // SyntaxError, EvalError

    // if an exception occured -> go to catch block
    // the code below is ignored

    console.log("End of the try block!");

} catch (error) {
    // error handling

    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
}

console.log("Continue...");

// generate user-defined exceptions: throw new ErrorObject(message);

// TASK: create a func to remove array item by index
function removeByIndex(arr, index) {
    if (arr.length === 0)
        throw new Error("Input array is empty.");

    if (index < 0 || index >= arr.length)
        throw new RangeError("Input index is out of range.");

    // throw operator returns an exception object and goes to catch {} block

    arr.splice(index, 1);
}

let numbers = [120, 9, -1, 0, 99, 33];
console.log("Original:", numbers);

// ----- Uncaught Error
//removeByIndex(numbers, -1); // Error

// 1 - show error in console when error is occured
try {
    const indexToRemove = +prompt("Enter index of the item to remove:");
    removeByIndex(numbers, indexToRemove);

} catch (error) {
    console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

numbers = []; // clear

// 2 - show client alert in browser when error is occured
try {
    const indexToRemove = +prompt("Enter index of the item to remove:");
    removeByIndex(numbers, indexToRemove);

} catch (error) {

    if (error instanceof RangeError) //if (error.name === "RangeError")
        alert(error.message);
    else if (error instanceof Error)
        console.log("Fill the array and try again!");
}

console.log("After remove:", numbers);

// --------- try {...} catch {...} finaly {...}
try {

    // conenct to database
    // working...
    // ! exception

} catch (error) {

} finally {

    // disconnect from database
}

// TASK: calculate summ of item in the client range
function getSumm(arr, start, end) {
    if (start > end) throw new Error("Start index can not be bigger than end!");
    if (start < 0 || end >= arr.length) throw new RangeError("One of the indexes is out of range!");

    let summ = 0;
    for (let i = start; i < end; i++) {
        summ += arr[i];
    }
    return summ;
}

try {
    // initialize array
    numbers = [34, 9, -1, 0, 99, 33, 73, 12, 9, 40];
    console.log("Numbers:", numbers);

    const start = +prompt("Enter the first position:");
    const end = +prompt("Enter the last position:");

    const summ = getSumm(numbers, start, end);

    // when exception is thrown the next code will not be executed

    console.log(`Summ of item [${start}]...[${end}]:`, summ);

} catch (ex) {
    console.log(ex.message);

} finally {
    // reset array
    numbers.fill(0);
}

console.log("Array:", numbers);
