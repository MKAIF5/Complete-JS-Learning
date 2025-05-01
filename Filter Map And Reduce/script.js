// for each

const programming = ["js", "py", "java", "cpp"];

const forEach = programming.forEach((item) => {
    // console.log(item);
    return item
});
// console.log(forEach);

// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterValue = myNums.filter((num) => {
    return num > 4
});

const newNums = [];

myNums.forEach((item) => {
    if (item > 4) {
        newNums.push(item);
    }
})

// console.log(newNums);


// console.log(filterValue);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => {
    // return bk.genre === "History"
    return bk.publish >= 1995 && bk.genre === "HistoryF"
});
// console.log(userBooks);

// Map

const numsMap = [1, 2, 3, 4, 5];

const mapNum = numsMap.map((num) => {
    return num * 10
}).map((num) => {
    return num + 1
}).filter((num) => {
    return num >= 30
})

// console.log(mapNum);

// Reduce

const numbers = [1, 2, 3];

const total = numbers.reduce((acc, curr) => {
    // console.log(`acc is ${acc} curr is ${curr}`);
    return acc + curr
}, 5);
// console.log(total);

const courseCart = [
    {
        course: "js",
        price: 1000
    },
    {
        course: "py",
        price: 700
    },
    {
        course: "java",
        price: 1500
    },
];

const courseTotal = courseCart.reduce((acc, curr) => {
    return acc + curr.price
}, 0);
console.log(courseTotal);