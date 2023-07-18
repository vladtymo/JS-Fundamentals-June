// -=-=-=-=-=-=-=- Callbacks -=-=-=-=-=-=-=-

console.log("Before process!");

// setTimeout(() => {
//     let result = 1;
//     for (let i = 1; i < 6; i++) {
//         result *= i;
//     }
//     console.log("Factorial of 6 = ", result);

//     setTimeout(() => {
//         console.log("Pow: ", Math.pow(2, 16));
//     }, 1000);
// }, 2000);

// ---------- Promise
// create syntax: new Promise((resolve, reject) => {});
// create and automatically start the Promise
const hardWork = new Promise((resolve, reject) => {
    // do work...

    console.log("Start doing hard work...");
    if (Math.random() < 0.5)
        reject("Something went wrong!"); // error
    else {
        setTimeout(() => {
            const result = Math.pow(4, 8);
            resolve(result); // success result
        }, 1000);
    }
});

// -------- .then() - handling the promise result
// Promise states: pending -> fullfiled / rejected

hardWork.then((res) => {
    console.log("Finish hard work! Result =", res);
}).catch((err) => {
    console.warn(err);
});

// TASK: get data from the database asynchronously
function getActiveUser(ip) {
    return new Promise((res, rej) => {
        if (ip === '198.0.0.3')
            setTimeout(() => {
                b = 30;
                res({ id: 1002, login: 'vlad ' });
            }, 1800);
        else
            rej(new Error("Invalid IP address!"));
    });
};

const ip = "198.0.0.3"; //prompt("Enter IP:");

getActiveUser(ip)
    .then(res => {
        console.log("Active user:", res);
        return getActiveUser("0.0.0.0");
    })
    .then((res) => console.log(res))
    .catch(err => console.log(err.message));

// ------------ Promise methods
Promise.all([hardWork]).then((values) => {
    console.log("All promises have done!");
}).catch((err) => console.log(err));

// ------------- [async] & [await]
async function showActiveUser() {
    // getActiveUser("198.0.0.3")
    //     .then((user) => {
    //         console.log(user);
    //         document.body.innerHTML += `<p>Active user: ${user.login}</p>`;
    //     });

    const user = await getActiveUser("198.0.0.3");

    // continue when the promise is finished

    console.log(user);
    document.body.innerHTML += `<p>Active user: ${user.login}</p>`;
}

showActiveUser();

// TASK: get users from the server
async function showUsers() {

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(data => {
    //     console.log(data.status);
    //     return data.json();
    // })
    // .then(users => console.log(users));

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data.status);

    const users = await data.json();
    console.log(users);
}

//... continue ...
console.log("After process! Continue...");
