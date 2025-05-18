const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId;

const startChangingColor = () => {
    if (!intervalId) {
        const colorByChange = () => {
            document.body.style.backgroundColor = randomColor();
        }
        intervalId = setInterval(colorByChange, 1000)
    }

}

const stopChangingColor = () => {
    clearInterval(intervalId)
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);