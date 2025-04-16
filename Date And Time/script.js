// Date

const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());


// console.log(myDate.toLocaleDateString());

// const myTimeStamp = Date.now();
// console.log(typeof myTimeStamp);
// console.log(typeof myDate);

const myCreatedDate = myDate.toLocaleString("Default" ,{
    // weekday: "long",
    // day: "numeric",
    // timeZone: "GMT"
});
console.log(myCreatedDate);