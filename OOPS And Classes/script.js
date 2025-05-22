// Parts Of OOP

// Object Literals
// Constructor Function
// Classes
// Instances (this , new)

// OOPS || 4 Pillars

// # Abstraction
// # Encapsulation
// # Inheritance
// # Polymorphism

// Object Letrals || this

const user = {
    username: "kaif",
    age: 16,
    isLoggedIn: true,

    getUserDetails: () => {
        // console.log(`Data Is Recieved Into DataBase`);
        // console.log(this.username);
        // console.log(this);
    }
}

// console.log(user.getUserDetails());

// Constructor Function || new

function userFunc(username, age, loginCount) {
    this.username = username;
    this.age = age;
    this.loginCount = loginCount

    return this
}

const userOne = new userFunc("kaif", 16, 15);
const userTwo = new userFunc("arham", 16, 10);
console.log(userOne);

/*
 
Absctraction : User Ko Jitni Details Ki Zarurat Hai Utni Hi Batatey Hain Jo 
Andar Ke Kaam Ko Chupa Lete Hain

Encapsulation : Kuch Cheezon Ka Access Nhi Dena Hota Ya Private Karna Hota Hai 
Usse Encapsulation Khetey Hain

*/