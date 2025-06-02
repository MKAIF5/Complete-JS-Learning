const students = [
    { name: "aina", marks: 85 },
    { name: "arham", marks: 42 },
    { name: "Kaif", marks: 91 },
    { name: "fariha", marks: 35 },
    { name: "imran", marks: 74 },
    { name: "hania", marks: 95 },
];

const studentsMarks = students.filter((num) => {
    return num.marks >= 50
});

// console.log(studentsMarks);

const studentsName = students.map((name) =>{
    return name.name
});

// console.log(studentsName);

students.forEach((student) =>{
      console.log(`${student.name} Score ${student.marks} Marks`);
})