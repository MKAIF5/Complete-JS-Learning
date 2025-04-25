// this and arrow function

// this

// console.log(this);

const user = {
    username: "kaif",
    price: 999,
    welcomeMessage: function (){
        // console.log(`${this.username} , welcome to the website`);
    }
};

user.welcomeMessage();
user.username = "imran";
user.welcomeMessage();

function chekThisInFunc(){
    const username = "kaif";
    // console.log(this.username);
};
chekThisInFunc();   

// arrow function

const addTwoNumbers = (num1 , num2) => ({username: "kaif"});

console.log(addTwoNumbers(2 , 5));