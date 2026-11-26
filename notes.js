console.log("Hello World");
console.log("First day using GIT");
// Function to calculate the average of 3 numbers

function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

const average = calculateAverage (4, 20, 107);

console.log("The average of 3, 20 and 107 is: ", average);

// Math helper functions
const roundAverage = Math.round(average);

console.log ("The average of 3, 20 and 107 is: ", roundAverage);

// The document object or DOM
//The DOM is an in-memory representation of the webpage
console.log(document);

//There's also the console object or Console
console.log(console);

//These objects have functions that are accessible through dot

//2 important functions to get elements from HTML
const mainTitle = document.getElementById
("main-title")

console.log(mainTitle);

const normalText = document.querySelector(".normal-text");

console.log(normalText);

//This is an attribute of the HTML element
normalText.textContent = "Replaced with JavaScript"

//Get the Main CTA from JS

const mainCTA = document.getElementById("main-cta");

console.log(mainCTA);

/* When HTML Elements or the browser has actions, we can capture that action through JS */

//Use a function from the document object to capture the actions
//This function takes 2 parameters
//First- the action to capture
//A function to execute after that action
//We didn't add the parenthesis of the function here because
document.addEventListener("click", greetMessage);

function greetMessage() {
    alert("Hello from the click of the CTA");
}

//Call the HTML Elements for 2 query selectors
const detailsButton = document.querySelector ("#details-button");
const activityMessage = document.querySelector("#activity-message");

// Read more about the Callback hell from JS