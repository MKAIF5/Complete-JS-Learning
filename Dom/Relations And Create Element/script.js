// Relations

const parent = document.querySelector(".parent");
const dayOne = document.querySelector(".day");

// console.log(parent);
// console.log(parent.children[0].innerText);
// console.log(parent.children[1].innerText);

parent.children[0].style.color = "orange"

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const parentElement = dayOne.parentElement;
// console.log(parentElement);
// console.log(dayOne.nextElementSibling)

// Create Element

const div = document.createElement("div");

div.className = "heading"
// div.id = Math.floor(Math.random() * 10 + 1);
div.id = "title"
div.setAttribute("title", "title detected");
div.style.backgroundColor = "green";
div.style.color = "white";
div.style.padding = "15px";
div.style.borderRadius = "15px"
// div.innerText = "JS Learning With Kaif"
const addText = document.createTextNode("JS Learning With Kaif");
div.appendChild(addText);

document.body.appendChild(div);

console.log(div);