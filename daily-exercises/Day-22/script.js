console.log("Hello Hogwarts from the browser");

function castProtego() {

    const result = document.getElementById("protegoResult");

    result.textContent =
        "✨ Protego! A magical shield surrounds you!";
    
    setTimeout(function() {
        result.textContent ="";
    }, 5000);

}


function castPatronus() {

    const result = document.getElementById("patronusResult");

    result.textContent =
        "✨ Expecto Patronum! A beautiful silvery-white Patronus emerges from your wand!";

}

