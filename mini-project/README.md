
# The Hogwarts Chronicles: A Magical Adventure

This folder is Assignment 2, worth 5 points. Complete it independently using Week 5's taught concepts. It shares a repository with the three daily exercises, but it is a different page with its own content, code, tests, and explanation. Do not replace the daily exercises with this page.

## My Plan

- **Fictional event and intended visitor:** The Hogwarts Chronicles is an interactive, Harry Potter-inspired text-based adventure designed for fans of the Wizarding World who want to experience the beginning of a magical journey at Hogwarts School of Witchcraft and Wizardry.
- **User story:** As someone considering beginning a magical adventure at Hogwarts, I want to switch between an introductory story message and additional preparation details so I can discover more about my Hogwarts invitation and what awaits me.
- **Exact initial summary message:** The morning owl arrives at your window, carrying an unusual envelope sealed with green wax. Your name is written across the front in elegant handwriting. Could this really be a letter from Hogwarts School of Witchcraft and Wizardry?
- **Exact preparation-details message:** You carefully break the green wax seal and unfold the parchment. Inside, you discover an invitation to Hogwarts! Your journey into the magical world is about to begin. But why does the letter mention a mysterious secret hidden within the castle?

## Build Checklist

1. Complete `index.html` with a meaningful document title, header/main/footer, one `h1`, and at least two useful sections with `h2` headings. Give the visitor enough information to understand your event.
2. Add a native `button` with `type="button"`, a readable action label, and a unique ID. Add a paragraph with its own unique ID and `aria-live="polite"`. Put your summary in this paragraph's initial HTML.
3. Keep the local stylesheet link. Link `script.js` as an external script using `defer` in the document head.
4. Complete `style.css` with readable typography, spacing, and a flexible layout. Around 320px wide the content must remain readable without horizontal scrolling. Keep keyboard focus visible on the button.
5. In `script.js`, select the button and paragraph using `document.querySelector`. Create a Boolean that means "details selected" and starts in the summary state.
6. Write a named function with one Boolean parameter that returns your selected message using `if/else`.
7. Register a `click` listener using `addEventListener`. In it, change the Boolean and update the paragraph's `textContent` with your function's return value.
8. Save and open this page in the browser. Confirm summary on load, details after one activation, and the same summary after the next activation. Check keyboard access, layout, and the browser Console.
9. Complete `TESTS.md`, then your explanation below. Review your changes, commit meaningful progress, push, and check that GitHub has the final files.

Keep the feature small. Forms, visitor input, arrays, external services, saved registrations, and deployment are not required.

## How to Open and Test My Page

I am using Visual Studio Code to edit my HTML, CSS, and JavaScript files. I will save my changes and open the `index.html` file in a web browser to test the interaction.

I will use the browser to verify that the opening message appears when the page loads, the preparation-details message appears after clicking the button once, and the original message returns after clicking the button a second time.

I will also test the button using my keyboard by pressing Tab to focus the button, then using Enter and Space to activate it. I will inspect the browser Console for JavaScript errors.

## My Explanation

- **What my HTML provides:** My HTML creates the structure and content of The Hogwarts Chronicles. It includes a header introducing the adventure, a main section containing the story and interactive button, and a footer with fictional Hogwarts information. The paragraph containing the opening story uses `aria-live="polite"` so assistive technology can announce changes when the message updates.
- **What my CSS provides:** My CSS creates the visual appearance of the adventure using a Hogwarts-inspired theme. I use parchment colors, emerald green accents, readable typography, spacing, borders, and button styling to create a magical atmosphere. The layout is designed to remain readable on smaller screens, and the button has a visible keyboard focus indicator.
- **What my JavaScript provides:** My JavaScript makes the page interactive by allowing the visitor to switch between two story messages. It uses a Boolean variable to track which message is selected, a named function with an `if/else` statement to return the appropriate message, and an event listener to detect button clicks and update the paragraph's text.
- **My button ID, paragraph ID, Boolean variable, and function name:** My button ID is `storyButton`. My paragraph ID is `storyMessage`. My Boolean variable is `secondMessageSelected`, which starts as `false` to indicate that the original summary message is selected. My named function is `getStoryMessage()`, which accepts a Boolean parameter called `showSecondMessage`.
- **One activation, traced from the event through the state change and return value to the visible message:** When the visitor clicks the button, the `addEventListener()` detects the click and executes its callback function. The Boolean variable `secondMessageSelected` changes from `false` to `true` using the NOT (`!`) operator. The `getStoryMessage()` function receives the updated Boolean value and uses its `if/else` statement to return the preparation-details message. Finally, `textContent` places the returned message inside the paragraph with the ID `storyMessage`, allowing the visitor to read the next part of the story.
- **One specific decision or problem, and how I checked it:** I decided to use a Boolean variable instead of creating multiple buttons because I wanted one button to switch between the two story messages. I checked that the interaction works by clicking the button twice and confirming that the second activation restores the exact original message. I also checked that the button can be activated using the keyboard.
- **Any unfinished work or assistance to acknowledge:** I used ChatGPT as a learning resource to help organize my project, understand the HTML structure, and explain JavaScript concepts such as Boolean variables, functions, return values, and event listeners. I reviewed and adapted the code for my project. Any remaining testing or unfinished work will be identified in my final submission.

## Final Check

Replace TODOs with your own implementation and observations. Push the final files. Confirm that the root repository README links here.

Assignment 2 is due **Sunday, November 29, 2026, at 10:59 p.m. CST (America/Tegucigalpa)**.

Paste only your public repository's root URL into the separate Assignment 2 Moodle entry. Submit the same URL to Assignment 1 for its daily-exercises folder. Do not upload a ZIP, screenshot, or deployed-page link.
