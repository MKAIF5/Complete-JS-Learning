// Promises : DB calls , CryptoGraphy , Network

// then catch and finally

const promisesOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async Task Is Completed");
        resolve()
    }, 1000)
})

promisesOne.then(() => {
    // console.log("promise is consumed");
})

new Promise((res, rej) => {
    setTimeout(() => {
        //  console.log("Async Task Is Completed");
        res()
    }, 1000);
}).then(() => {
    // console.log("promises is consumed");
})

const promiseThree = new Promise(function (res, rej) {
    setTimeout(() => {
        //  console.log("Async Task Is Completed");
        res({ username: "kaif", age: 16 })
    }, 1000);
})

promiseThree.then((user) => {
    // console.log(user);
    return user.username
}).then((username) => {
    // console.log(username);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "kaif", password: 123 })
        }
        else {
            reject("ERROR : Something Went Wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    // console.log(user);
    return user.password
}).then((password) => {
    // console.log(password);
}).catch((error) => {
    // console.log(error);
}).finally(() => {
    // console.log("The Promise Is Either Resolve Or Reject");
});

// async and await

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "kaif", password: 123 })
        }
        else {
            reject("ERROR : Something Went Wrong")
        }
    }, 1000);
})

async function asyncPromise() {
    try {
        const promisesWait = await promiseFive
        // console.log(promisesWait);
    } catch (error) {
        // console.log(error);
    }
};
asyncPromise();

// fetch

// then catch

fetch("https://api.github.com/users/mkaif5")
    .then((response) => {
        // console.log(response)
        return response.json()
    }).then((data) => {
        // console.log(data);
    });

// async await

const response = fetch("https://api.github.com/users/mkaif5")

async function apiUsed() {
    const data = await response
    const dataComming = await data.json()
    console.log(dataComming);

}
apiUsed()