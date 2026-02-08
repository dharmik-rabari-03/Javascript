document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();



    let Alpha = document.getElementById("Alphabet").value

    let result = document.getElementById("result")


    if (Alpha == "a" || Alpha == "A" ||
        Alpha == "e" || Alpha == "E" ||
        Alpha == "i" || Alpha == "I" ||
        Alpha == "o" || Alpha == "O" ||
        Alpha == "u" || Alpha == "U"
    ) {
        result.textContent = `${Alpha} is Vowel`
    }
    else if (Alpha.length == 1 &&
        (Alpha >= "a" && Alpha <= "z" ||
            Alpha >= "A" && Alpha <= "Z")
    ) {

        result.textContent = `${Alpha} is consonant`

    }
    else {
        result.textContent = `${Alpha} is not Alphabet , plz Enter alphabet`
    }

})