// object singleTon , constructor

// const obj = new Object();

// object literals

const obj = {};

obj.name = "kaif khan",
    obj.id = 123;
obj.isLoggedIn = false

// console.log(obj);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

const obj3 = Object.assign({} , obj1 , obj2);
// console.log(obj3);


const regularUser = {
    email: "kaif@google.com",
    fullname: {
        username:{
            firstname: "kaif", 
            lastname: "khan"
        }
    }
};
// console.log(regularUser.fullname.username.lastname);

const user = [
    {
        email: "kaif@gmail.com",
        id: 1
    },
    {
        email: "kaif@gmail.com",
        id: 2
    },
    {
        email: "kaif@gmail.com",
        id: 3
    },
    {
        email: "kaif@gmail.com",
        id: 4
    },
    {
        email: "kaif@gmail.com",
        id: 5
    },
];

const arrayAccess =   user[1].email;

// Object de-Structure

const course = {
    course: "js",
    price: 1000,
    teacherName: "kaif"
}

const {teacherName: teacher} = course;
// console.log(teacher);