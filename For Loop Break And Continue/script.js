// for loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
};

const myArray = ["batman", "superman", "flash"];
// console.log(myArray.length);


for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
};

// break and continue

for (let i = 1; i <= 10; i++) {
    // console.log(i);
    if (i === 5) {
        // console.log("5 is the best number");
        break;
    }    
}

for (let i = 1; i <= 10; i++) {
    // console.log(i);
    if (i == 5) {
        // console.log("5 is the best number");
        continue;
    }    
}