// Classes

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
}

const kaif = new User("kaif", "kaif@gmail.com", 123);

// console.log(kaif);
// console.log(kaif.encryptPassword());

// Behind The Scene


function funcUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

funcUser.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

const Imran = new funcUser("Imran", "Imran@gmail.com", 456);
// console.log(Imran);
// console.log(Imran.encryptPassword());

// Inheritance

class UserInheritance {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USEERNAME IS ${this.username}`);
    }
}

class Teacher extends UserInheritance {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A New Course Was Added By ${this.username}`);
    }
}

const tea = new Teacher("tea", "tea@gmail.com", "123");
// const coffee = new Teacher("coffee", "coffee@gmail.com", '456')
const coffee = new UserInheritance("coffee");

tea.addCourse();
coffee.logMe()