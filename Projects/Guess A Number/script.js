let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const prevSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const gameOver = document.querySelector(".resultP");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validation(guess);
    });
};

function validation(guess) {
    if (isNaN(guess)) {
        alert("Please Enter A Valid Number");
    }
    else if (guess < 1) {
        alert("Please Enter A Number Between 1 To 100");
    }
    else if (guess > 100) {
        alert("Please Enter A Number Between 1 To 100");
    }
    else {
        prevGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number Is ${randomNumber}`);
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
};

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("Your Guessed It Right");
        alert("Congratulation")
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage("Your Number Are Too Low");
    }
    else if (guess > randomNumber) {
        displayMessage("Your Number Are Too High");
    }
};

function displayGuess(guess) {
    userInput.value = "";
    prevSlot.innerHTML += `${guess} , `
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
};

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
};

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = "<h2 id='newGame'>Start New game</h2>"
    gameOver.appendChild(p);
    playGame = false
    newgame();
};

function newgame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuesses = 1;
        prevSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute("disabled");
        gameOver.removeChild(p)

        playGame = true;
    });
};