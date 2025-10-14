
// console.log(document);  // Shows HTML structure
// console.dir(document);  // Shows document as a JS object (with properties/methods)

// Select element by ID → returns a single element
const paragraph = document.getElementById("paragraph");

// console.log(paragraph.innerHTML); // "Hello there!!"
// console.dir(paragraph); // See all properties/methods

// Modify HTML content dynamically
paragraph.innerHTML = 'Moikka from JS'; // Replaces text inside <p>

// Another access method (directly in one line)
document.getElementById('paragraph').innerHTML = 'Moi, moi! Love JS';

// Select elements by class → returns an HTMLCollection (array-like)
const blueText = document.getElementsByClassName("blue-text");
// console.log(blueText); // Logs all elements with class="blue-text"

// Iterate over HTMLCollection with for...of
for (const text of blueText) {
  // console.log(text.tagName, text.innerText);
}

// Select elements by tag name → also returns an HTMLCollection
const paragraphs = document.getElementsByTagName("p");

// Loop through each <p> and show its tag name and text
for (const p of paragraphs) {
  // console.log(p.tagName, p.innerText);
}

// Using querySelector (first match) → CSS-style selector
const firstBlue = document.querySelector(".blue-text");
// console.log("First .blue-text:", firstBlue.innerText);

const paragraph1 = document.querySelector("#paragraph");
console.log(paragraph1);

const paragraph2 = document.querySelector("p");
console.log(paragraph2 );


const blueElements = document.querySelectorAll(".blue-text, i, u, span");
console.log('Elements with class .blue-text:', blueElements.length); //nodelist

for(const text of blueElements){
      console.log(text.tagName, text.innerText);
}

const inputsText = document.querySelectorAll("input[type='text']");
console.log(inputsText[0].id);

// for(const input of inputsText){
//   input.placeholder = "Default text"
// }

/* === Accessing elements and manipulating attributes === */
// const input = document.getElementById("textName");

// console.log("Placeholder:", input.placeholder); // "Nombre"
// console.log("Initial value:", input.value);     // ""

// input.value = input.placeholder; // assign placeholder as value

// console.log("Nuevo Value:", input.value);

// Modify content and HTML Atributes
document.getElementById("paragraph").innerHTML = "<b id='some'>Nihao, Wo Ai Ni JS</b>";
// document.querySelector("#paragraph").innerText = "<b>Nihao, Wo Ai Ni JS</b>";

const anchor = document.querySelector("a");
console.log(anchor.href);
anchor.href = "https://google.com";
console.log(anchor.href);
anchor.setAttribute("title", "Go to another site");
anchor.removeAttribute("href");

document.querySelectorAll("b, u, span").forEach(e => e.innerText = "Modified by ForEach");

console.log("Updated element:", document.getElementById("some"));


/* === Inline styles applied with JS === */

const divForm = document.getElementById("divForm");
divForm.style.background = "#add";
divForm.style.padding = "15px 10 px";
divForm.style.border = "1px solid #0000";
divForm.style.borderRadius = "2px";


/* === Events basics === */
function hi(){
    alert("Moi from HTML inline event");
};

// Overwrites previous onclick (not additive)
document.getElementById("btn").onclick = () => {
    //console.log("Moi Moi OnClick First Function");
};


// addEventListener allows multiple functions for the same event
document.getElementById("btn").addEventListener("click", (e) => {
  // console.log(e.type);
  // console.log(e.target.id);
  // console.log("Moi Moi from some Functions");
});

document.getElementById("btn").addEventListener("click", () => {
  // console.log("Moi Moi from second Funcion");
});

// Using a closure to pass parameters to an event
// const closure = (number1, number2) => (e) =>
//   console.log(`Hi from closure with ${number1} and ${number2} (${e.type})`);

// const c = closure(2, 4);
// document.getElementById("btn").addEventListener("click", c);


/* === Exploring various events === */
document.getElementById("paragraph").addEventListener("mouseover", () => {
  // console.log("Mouse over the paragraph");
});

document.querySelector("#textName").addEventListener("keyup", (e) => {
  // console.log("Key pressed:", e.key);
});

document.querySelectorAll("input[type='text'], input[type='email']").forEach(input => {
  input.addEventListener("focus", (e) => {
    // console.log("Input focused:", e.target.id);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM loaded successfully");
});


/* === Create and delete dinamic elements === */

document.querySelector("#frm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submit");
    addInfo()
});

function addInfo(){
  const divContent = document.getElementById("divContent");

  // Get form values
    const name = document.getElementById("textName").value;
    const email = document.getElementById("textEmail").value;
    const street = document.getElementById("textStreet").value;

  // Create elements
    const newDiv = document.createElement("div");
    const newParagraph = document.createElement("p");
    const newButton = document.createElement("button");

  // Set content
    newParagraph.innerText = `Name: ${name}, Email: ${email}, Street: ${street}`;
    newButton.innerText = "Delete";

  // Style
  newDiv.style.background = "#eef";
  newDiv.style.padding = "8px";
  newDiv.style.margin = "8px 0";
  newDiv.style.borderRadius = "4px";
  newButton.style.marginLeft = "8px";

  // Handle delete button
    newButton.addEventListener("click", (e) => {
        console.log(e.target.parentNode.parentNode.tagName);
        e.target.parentNode.parentNode.remove();
    });

  // Build structure
    newParagraph.appendChild(newButton);
    newDiv.appendChild(newParagraph);
    divContent.appendChild(newDiv);

  // Clear form fields
    document.getElementById("textName").value = "";
    document.getElementById("textEmail").value = "";
    document.getElementById("textStreet").value = "";

};