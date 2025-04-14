// Stack And Heap

// Stack (Primitive) And Heap (Non Primitive , Reference Type);

// Stack

let userEmail = "userId@gmail.com";
let anotherEmail = userEmail;
anotherEmail = "kaif@google.com"

// console.log(userEmail);
// console.log(anotherEmail);

// Heap

let objOne = {
    user: "kaif",
    id: 1,
    age: 15
}

let objTwo = objOne;

objTwo.user = "maaz";

// console.log(objOne.user);
// console.log(objTwo.user);