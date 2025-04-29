//Control Flow

// if else

const temp = 20;

if (temp > 25) {
    // console.log("Its Very Cold");
}
else {
    // console.log("Weather Is Hot");
}

// const score = 300;

// if (score === 100) {
//     console.log("Poor");
// }
// else if (score === 200) {
//     console.log("Fair");
// }
// else if (score === 300) {
//     console.log("Very Good");
// }
// else {
//     console.log("Plzz Play This Game");
// }


// Comparison Operators : === , == , != , !== , >= , <=

// console.log(5 >= 5);

const email = "kaif@gmail.com"
const debateCard = 1000;
const age = 16;

if (email && debateCard >= 500 && age > 18) {
    //    console.log("You Have Hired");
}

if (email || debateCard >= 2000) {
    // console.log("You Are Hired");
}


// switch case 

const month = "mar"

switch (month) {
    case "jan":
        // console.log("1st Month Is Going");
        break;

    case "feb":
        // console.log("2nd Month Is Going");
        break;

    case "mar":
        // console.log("3rd Month Is Going");
        break;

    case "apr":
        // console.log("4th Month Is Going");
        break;

    default:
        // console.log("plz enter yor month");
        break;
}