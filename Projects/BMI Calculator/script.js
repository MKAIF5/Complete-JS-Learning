const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results");

    if (height === "" || isNaN(height) || height < 0) {
        results.innerHTML = "Please Enter A Valid Height"
    }
    else if (weight == "" || isNaN(weight) || weight < 0) {
        results.innerHTML = "Please Enter A Valid Weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18.6) {
            results.innerHTML = `${bmi} </br> You Are Under Weight`
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `${bmi} </br> You Are Normal Range`
        }
        else if (bmi >= 24.9) {
            results.innerHTML = `${bmi} </br> You Are Over Weight`
        }
    }

})