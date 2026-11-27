// Select the HTML elements
const storyButton = document.querySelector("#storyButton");
const storyMessage = document.querySelector("#storyMessage");

// Track which story message is currently selected
let secondMessageSelected = false;

// Return the correct story message
function getStoryMessage(showSecondMessage) {

    if (showSecondMessage === true) {

        return "You carefully break the green wax seal and unfold the parchment. Inside, you discover an invitation to Hogwarts! Your journey into the magical world is about to begin. But why does the letter mention a mysterious secret hidden within the castle?";

    } else {

        return "The morning owl arrives at your window, carrying an unusual envelope sealed with green wax. Your name is written across the front in elegant handwriting. Could this really be a letter from Hogwarts School of Witchcraft and Wizardry?";

    }
}

// Listen for a button click
storyButton.addEventListener("click", function() {

    // Switch between the two message states
    secondMessageSelected = !secondMessageSelected;

    // Display the selected message
    storyMessage.textContent = getStoryMessage(secondMessageSelected);

});