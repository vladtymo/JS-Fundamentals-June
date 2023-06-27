// -=-=-=-=-=-=-=- classes -=-=-=-=-=-=-=-
// object prototype (blueprint)

// this - reference to the window object
console.log("this outside object: ", this);

class User {
    // this - reference to this object instance

    // private fields: we can access only from the class
    #password;

    // static - single item for all class instances
    static count = 0;

    constructor(login, password) {
        // create object properties
        this.login = login;
        this.#password = password;
        User.count++;
    }

    // ------------ methods
    // getter / setter (methods)
    // getPassword() {
    //     return `${this.#password[0]}${"*".repeat(this.#password.length - 1)}`;
    // }
    // setPassword(newPassword) {
    //     // data validation
    //     if (newPassword.length >= 6)
    //         this.#password = newPassword;
    //     else
    //         console.warn("New password too short!");
    // }

    // getter / setter (get/set members)
    get password() {
        return `${this.#password[0]}${"*".repeat(this.#password.length - 1)}`;
    }
    set password(newPassword) {
        // data validation
        if (newPassword.length >= 6)
            this.#password = newPassword;
        else
            console.warn("New password too short!");
    }

    static checkPassword(value) {
        return value.length >= 6;
    }

    copy() {
        return Object.assign({}, this);
    }

    render() {
        document.writeln(`<p>User: ${this.login} ${this.password}</p>`);
    }
}

// invoke static class method
console.log("Check password '1212': ", User.checkPassword("1212"));

let me = new User("vtymos", "Qwer12");
let admin = new User("alex", "sa1");
let manager = new User("boss", "Rerer4");

console.log(me);

me.render();        // this = me
admin.render();     // this = admin
manager.render();   // this = manager

// change object property
//me.password = "12";  // bad practice: change object props directly
//me.setPassword("12"); // good practice: change using methods 

//me.#password; // ! can not use private fields outside the class

// 1 - using methods
//me.setPassword("123"); ignored
//console.log("Me password: ", me.getPassword());

// 2 - using get / set
me.password = "Tutu123";                    // set
console.log("Me password: ", me.password);  // get

const copy = me.copy();

// get static members
console.log("Users count:", User.count);

// ------------- inheritance
class SuperUser extends User {
    // super - reference to the base object (parent)

    constructor(login, password, code) {
        super(login, password); // parent constructor
        this.code = code;
    }

    render() {
        document.writeln(`<h4>Super User</h4>`);
        super.render(); // parent render
    }
}

let boss = new SuperUser("boss1", "Qwerty", "4455");
boss.render();
