// Basic greeting alert
alert("Welcome to SweetPlanner! 😊💗                                                                                                                               We are so excited to have you here! This space is designed to help you plan, organize, and bring your dreams and goals to life. 🌟");

// Constants for login attempts
const MAX_LOGIN_ATTEMPTS = 3;
let attempts = 2; 
if (attempts < MAX_LOGIN_ATTEMPTS) {
    console.log("Try logging in.");
} else if (attempts === MAX_LOGIN_ATTEMPTS) {
    console.log("Last attempt!");
} else {
    console.log("Account locked.");
}

// Counter using while loop
let counter = 0;
while (counter < 5) {
    console.log("Counter is at: " + counter);
    counter++;
}

// For loop example
for (let index = 0; index < 5; index++) {
    console.log("Loop iteration number: " + index);
}

// Function to greet a person
function greetPerson(name) {
    console.log("Hello, " + name);
}
greetPerson("Camila");

// Function to calculate the sum of two numbers
function calculateSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(calculateSum(5, 7));

// Function to multiply two numbers
function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

// Example of accessing an array and looping through it
let petTypes = ["Cat", "Dog", "Rabbit", "Parrot", "Fish"];
console.log(petTypes[0]);  // Logs the first pet type
for (let index = 0; index < petTypes.length; index++) {
    let pet = petTypes[index];
    console.log("Pet type " + (index + 1) + ": " + pet);
}

// Accessing and modifying the 'demo' element
document.getElementById("demo").innerText = "Hello World!";

// Ensure the element exists before modifying the style
const exampleClassElement = document.getElementsByClassName("example-class")[0];
if (exampleClassElement) {
    exampleClassElement.style.color = "pink";  // Change color to pink
} else {
    console.log("No element with class 'example-class' found.");
}

// Set image attributes
let imgTag = document.getElementsByTagName("img")[0];
if (imgTag) {
    imgTag.setAttribute("alt", "Example Image");

    let newAttr = document.createAttribute("data-custom");
    newAttr.value = "customData";
    imgTag.setAttributeNode(newAttr);
} else {
    console.log("No image element found.");
}

// Fixing 'getElementById' usage and setting font size
const demoElement = document.getElementById("demo");
if (demoElement) {
    demoElement.style.fontSize = "20px";
    demoElement.innerText = "Hello World!";
} else {
    console.log("No element with id 'demo' found.");
}

// Function to initialize dynamic text
function initialize() {
    const dynamicText = document.getElementById('dynamicText');
    if (dynamicText) {
        dynamicText.innerText = "Timer is not running.";
    }
}

// Crear un array de colores
const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "teal", "lime", "brown", "black", "white"];

// Función para cambiar el color del título cada vez que se hace clic
document.getElementById('changeStyleBtn').onclick = function() {
    const title = document.getElementById('main-title');
    if (title) {
        // Escoger un color aleatorio del array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;  // Cambiar color del título
        title.style.fontSize = '2em';  // Ajustar el tamaño del texto
    }
};

// Highlight text on hover
function highlightText() {
    const description = document.querySelector('.description');
    if (description) {
        description.classList.toggle('highlight');  // Add/Remove highlight class
    }
}

// Start timer functionality
let timer;
document.getElementById('startTimerBtn').onclick = function() {
    clearInterval(timer);  // Clear any existing timers
    let count = 0;
    timer = setInterval(() => {
        count++;
        const dynamicText = document.getElementById('dynamicText');
        if (dynamicText) {
            dynamicText.innerText = `Timer running: ${count} seconds`;
        }
    }, 1000);
};

// Stop timer functionality
document.getElementById('stopTimerBtn').onclick = function() {
    clearInterval(timer);
    const dynamicText = document.getElementById('dynamicText');
    if (dynamicText) {
        dynamicText.innerText = "Timer is stopped.";
    }
};

// Click event for button
document.getElementById("clickButton").onclick = function () {
    alert("Button clicked!");
};
