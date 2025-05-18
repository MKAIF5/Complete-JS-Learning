// setTimeout

const saykaif = () => {
    // console.log('kaif');
}

const nameChange = () => {
    document.querySelector("h1").innerHTML = "Web And App Develpment"
}

// const stop = setTimeout(nameChange, 1000)

// clearTimeout

document.querySelector("#stop").addEventListener("click", () => {
    clearTimeout(stop)
    // console.log("STOPPED");
});

// setInterval

const timeStart = () => {
    console.log("kaif");
}

let stop;

document.querySelector("#start").addEventListener("click", () => {
    if (!stop) {
        stop = setInterval(timeStart, 1000);
    }

});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(stop);
});