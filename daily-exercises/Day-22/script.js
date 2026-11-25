console.log("Hello Hogwarts from the browser");

function castSpell(spell) {

    const result = document.getElementById("spellResult");

    if (spell === "Protego") {

        result.textContent =
        "✨ Protego! A magical shield surrounds you!";

    } else if (spell === "Expecto Patronum") {

        result.textContent =
        "✨ Expecto Patronum! A Patronus emerges from your wand!";

    }

}