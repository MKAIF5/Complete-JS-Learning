// global and local scope

// basics

var a = 300;

if (true) {
    let a = 10;
    const b = 20;
    c = 30;
    // console.log(a);
}


// console.log(a);
// console.log(b);
// console.log(c);

// functions

function one() {
    const username = "kaif";
    function two() {
        const website = "youtube"
        // console.log(username);
    };
    // console.log(website);
    two()
}
one()

// if else

if (true) {
    const username = "kaif";
    if (username === "kaif") {
        const website = "youtube"
        // console.log(website);   
    }
    // console.log(username);

    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++ intersting +++++++++++++++++++ 

// hoisting

function addOne(num) {
    return num + 1
};

console.log(addOne(5));

const addTwo = function (num) {
    return num + 2
};

console.log(addTwo(5));