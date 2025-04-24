function func() {
    // console.log("k");
};

func()

// parameter and arguments

function user(username, user2) {
    // console.log(username , user2);
};

user("kaif", "khan");

// add numbers

function addTwoNumbers(num1, num2) {
    return num1 + num2
};

const result2 = addTwoNumbers(5, 5);

// console.log("Result", result2);

function randomUser(username = "sam") {
    return `${username} just logged in`
}
// console.log(randomUser())