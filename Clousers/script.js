// Lexical Scoping

function outer() {
    const username = "kaif";
    // console.log(secret);
    function inner() {
        // console.log(username);
        // const secret = "123abc"
    }
    function innerTwo() {
        // console.log(username);
        // console.log(secret);
    }
    inner()
    innerTwo()
}
outer();

// clousers

function makeFunc() {
    const name = "imran";

    function displayName() {
        // console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();
myFunc();

// mini project clousers

// document.getElementById("orange").addEventListener("click", () => {
//     document.body.style.backgroundColor = "orange"
// });

// document.getElementById("green").addEventListener("click", () => {
//     document.body.style.backgroundColor = "green"
// });

function colorhandler(color) {

    return function () {
        document.body.style.backgroundColor = `${color}`;
    };
};

document.getElementById("orange").addEventListener("click", colorhandler("orange"))
document.getElementById("green").addEventListener("click", colorhandler("green"))