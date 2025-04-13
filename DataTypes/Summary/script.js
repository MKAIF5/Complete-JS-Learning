// Primitive 

// String , Number , Boolean , Undefined , Null , Symbol , BigInt

const str = "kaif";
const score = 300.3;
const boolean = true;
const empty = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
const bigInt = 347235472346n

console.log(id === anotherId);


// Non Primitive

const heros = ["spiderman", "ironman", "captain-america"];

const myObj = {
    name: "kaif",
    age: 16,
    isLogged: true
};

const myFunc = function () {
    console.log("Hello World");
};