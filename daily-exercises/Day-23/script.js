// This is an incomplete starter. Run the finished page in a browser.
// TODO: Select the button and message paragraph by their IDs.
// TODO: Declare Boolean state matching the initial message in HTML.
// TODO: Define a named function that accepts the Boolean and returns a message.
// TODO: Add a click listener that changes the Boolean and updates textContent
// using the function's return value. A second activation must restore the first message.
// Declare Boolean state matching the initial message in HTML
let questAccepted = false;

// Define a named function that accepts the Boolean and returns a message
function getQuestMessage(accepted) {
    if (accepted) {
        return "✨ Quest Accepted! You enter the restricted library. A strange whisper echoes from behind the ancient bookshelves... Your adventure has begun!";
    } else {
        return "Your adventure is waiting...";
    }
}

// Add a click listener that changes the Boolean and updates textContent
questButton.addEventListener("click", function() {

    questAccepted = !questAccepted;

    questMessage.textContent = getQuestMessage(questAccepted);

});