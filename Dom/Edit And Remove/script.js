const addLanguage = (addLang) => {
    const li = document.createElement("li");
    li.innerHTML = `${addLang}`;
    document.querySelector(".language").appendChild(li);
}
addLanguage("Python");
addLanguage("Typescript");
addLanguage("java");

const addOptiLanguage = (addLang) => {
    const li = document.createElement("li");
    const addText = document.createTextNode(addLang);
    li.appendChild(addText);
    document.querySelector(".language").appendChild(li);
}
addOptiLanguage("Swift")

// Edit
const thirdChild = document.querySelector("li:nth-child(3)");
thirdChild.innerHTML = "GoLang"
const li = document.createElement("li");
li.textContent = "Mojo";
thirdChild.replaceWith(li)

const firstChild = document.querySelector("li:first-child");
firstChild.outerHTML = "<li>Typescript</li>"

const lastChild = document.querySelector("li:last-child");
lastChild.remove();