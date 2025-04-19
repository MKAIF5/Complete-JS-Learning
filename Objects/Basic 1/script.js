// Object Constructor
// Singleton
// Object.create()


// Object Literals

const mySym = Symbol('mykey1');

const jsUser = {
    "name": "kaif",
    "age": 16,
    [mySym]: "mykey",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday", "Sunday"],
    email: "kaif@google.com"
};
// console.log(jsUser.email);
// Object.freeze()

// console.log(jsUser["age"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello World");
};

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`)
}
console.log(jsUser.greetingTwo());