// Events

document.querySelector("#photoshop").addEventListener("click", (event) => {
    // console.log(event);
    // alert("photo");
}, false);

document.querySelector("#google").addEventListener("click", (event) => {
    event.preventDefault();
});

document.querySelector("#images").addEventListener("click", () => {
    // console.log("Inside li Clicked");
}, false);

document.querySelector("#owl").addEventListener("click", (event) => {
    // console.log("clicked owl");
    // event.stopPropagation();
}, false);

document.querySelector("#images").addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
}, false)