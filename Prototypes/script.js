// Prototypes

// Array : Object : Null
// String : Object : Null
// Function : Function && Object : Null

// Functions

function multipleBy5(num) {
    return num * 5
}

// console.log(multipleBy5(5));
// console.log(multipleBy5.power = 2);
// console.log(multipleBy5.prototype);

// New Keyword

function createUser(username, price) {
    this.username = username;
    this.price = price
}

createUser.prototype.increament = function () {
    this.price++
}

createUser.prototype.printMe = function () {
    // console.log(`The User Tea Price is ${this.price}`);
}

const tea = new createUser("kaif", 50);
const mangoShake = new createUser("imran", 100)

mangoShake.printMe()

// Create New Method

const myName = "kaif      ";
// console.log(myName.length);

const newHeros = ["thor", "spiderman"];

const newHerosPowers = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderpower: function () {
        console.log(`The Spidy Power Is ${this.spiderman}`);
    }
}

// console.log(newHerosPowers.getSpiderpower())

Object.prototype.kaif = function () {
    // console.log ("Hi My Name Is kaif");
}

newHerosPowers.kaif();
newHeros.kaif()

// Inheritance

const User = {
    username: "kaif",
    email: "kaif@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: true,
    fullTime: false,
    __proto__: TeachingSupport
}

TASupport.__proto__ = TeachingSupport

// Modern Syntax

Object.setPrototypeOf(Teacher, User)

String.prototype.trueLength = function () {
    console.log(this);
    console.log(this.trim().length);
}

myName.trueLength();
"icecream".trueLength()