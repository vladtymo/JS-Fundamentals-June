// -=-=-=-=-=-=-=- objects -=-=-=-=-=-=-=-
// create user
let login = "vtymos";
let roles = ["mentor", "teacher", "manager"];
let email = "exmaple@ukr.net";
let age = 18;
let isOnline = false;

function showUserByParams(login, roles, email /*...*/) {
    console.log(`User: ${login}, ${email}, roles: ${roles}`);
}

showUserByParams(login, roles, email /*...*/);

// create object: new Object()
let me = new Object();
me.email = "vtymos";
// other properties

// create user object: { key: value }
let user = {
    // properties
    login: "vtymos",
    roles: ["mentor", "teacher", "manager"],
    email: "exmaple@ukr.net",
    age: 18,
    isOnline: false,
    address: {
        city: "Rivne",
        street: "Soborna",
        building: "5a"
    },
    // methods
    render: function () {
        document.writeln(`User: ${login}, ${email}, roles: ${roles}`);
    }
};

user.render();

// access: object.property, object["property"]
console.log(`User status: ${user["isOnline"] ? "Online" : "Offline"}`);
console.log(`User street: ${user.address.street}`);

user.age++;

// add new object property
user.salary = 1200;
// delete object property
delete user.salary;

console.log(`Salary: ${user.salary}$`);

function showUserByObject(user) {
    console.log(`User: ${user.login}, ${user.email}, roles: ${user.roles}`);
}

showUserByObject(user);

// array of the object
let staff = [
    { id: 10, name: "Vlad" },
    { id: 12, name: "Olga" },
    { id: 20, name: "Igor" },
    { id: 21, name: "Viktoria" },
    { id: 22, name: " viktor" }
];

// str.trim() - removes white-spaces from both ends
console.log("User with name starts with 'V': ", staff.filter(x => x.name.trim().toUpperCase().startsWith("V")));

// show object properties
console.log("User properties:");
for (const key in user) {
    console.log(`Property ${key} = ${user[key]}`);
}

// check if the property exists
console.log("Does user has 'age': ", user.hasOwnProperty("age"));

// ------------ function constructors
function Account(login, password) {
    // create properties
    this.login = login;
    this.password = password;
    this.isAdmin = false;
    this.show = function () {
        console.log(`Account: ${this.login}`);
    }
};

const baseAccount = new Account("super1122", "Qwerty");
const otherAccount = new Account("bob99", "TestTest");

baseAccount.show();