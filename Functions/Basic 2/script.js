// funtions basic 2

// rest operators

function num(...num1) {
    return num1
};
// console.log(num(200 , 500 , 100));

// functions and objects

const user = {
    username: "kaif",
    age: 16
};

function handleObject(anyObject) {
    //    console.log(`the username is ${anyObject.username} and the age is ${anyObject.age}`);
};
handleObject({
    username: "kaif",
    age: 16
});

// functions and arrays

const arrays = [200, 300, 500];

function handleArray(anyArray) {
    return anyArray[1]
};
// console.log(handleArray([200, 400, 1000]));