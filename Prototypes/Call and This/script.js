function setUsername(username) {
    this.username = username
    console.log("Called");
}

function createUser(username, email, password) {
    setUsername.call(this , username);
    this.email = email
    this.password = password;
}

const user = new createUser("kaif", "kaif@gmail.com", "12345");
console.log(user);