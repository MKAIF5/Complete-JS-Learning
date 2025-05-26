// get or set

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}555`
    }

    set password(value) {
        this._password = value
    }
}

const kaif = new User("kaif@google.com", "abc");
// console.log(kaif.password);

class Person {
    constructor(firstname, lastname, age) {
        this._firstname = firstname;
        this._lastname = lastname;
        this.age = age
    }

    get fullname() {
        return `${this._firstname} ${this._lastname}`
    }

    set fullname(value) {
        const parts = value.trim().split(" ");
        if (parts.length >= 2) {
            this._firstname = parts[0];
            this._lastname = parts.slice(1).join(" ");
        }
        else {
            console.log("Invalid Full Name");
        }
    }

    _age = 0;

    get age() {
        return `${this._age}`
    }

    set age(value) {
        if (value < 0 || typeof value !== "number") {
            console.log("Invalid age. It must be a non-negative number.");
        }
        else {
            this._age = value
        }
    }
}

const Person1 = new Person("kaif", "khan", 16);
// console.log(Person1.fullname);
// console.log(Person1.age);


Person1.fullname = "imran qureshi";
Person1.age = -20
// console.log(Person1.fullname);
// console.log(Person1.age);