// for of 

// array

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    // console.log(val);
}

// strings

const greetings = "Hello World";

for (const greet of greetings) {

    // console.log(`The Char Is ${greet}`);
};

// Maps

const map = new Map();

map.set("Pakistan", "Islamabad");
map.set("India", "Delhi");
map.set("Japan", "Tokyo");

for (const [keys, values] of map) {
    //  console.log(keys , values);
};

// objects

// const myObject = {
//     name: "kaif",
//     age: "16"
// };

// for (const obj of myObject) {
//     // console.log(obj);
// }

// for in

// objects

const language = {
    js: "javascript",
    py: "python",
    cpp: "c++"
}

for (const key in language) {
    //    console.log(`${key} And The Full Name Is ${language[key]}`);
}

// arrays 

const coding = ["js", "cpp", "py", "java"];

for (const key in coding) {
    //    console.log(coding[key]);
}

// for each

const programming = ["javascript", "python", "java", "swift"];

programming.forEach(function (item, index, arr) {
    // console.log(item , index);
})

const dbValues = [
    {
        name: "kaif",
        age: 16
    },
    {
        name: "arham",
        age: 17
    },
    {
        name: "imran",
        age: 15
    },
];

dbValues.forEach((val) => {
    //    console.log(val.age);
})

// task : (for of) and (for in);

const students = [
    {
        name: "Ali",
        marks: { math: 85, english: 78, science: 92 }
    },
    {
        name: "Sara",
        marks: { math: 90, english: 88, science: 95 }
    },
    {
        name: "Umar",
        marks: { math: 70, english: 60, science: 80 }
    }
];

for (const student of students) {
    console.log(`Name : ${student.name}`);

    let total = 0;

    for (const subject in student.marks) {
        //  console.log(subject);
        const score = student.marks[subject]
        console.log(`${subject} : ${score}`);
        total += score
    }
    console.log(`Total Marks : ${total}`);
};