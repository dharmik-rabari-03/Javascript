document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let number = Number(document.getElementById("number").value);

    let result = document.getElementById("result");


    if (number > 0) {
        result.textContent = `The Number Is Positive`
    }
    else if (number < 0) {
        result.textContent = `The Number Is Negative`
    } else {
        result.textContent = `The Number Is Zero`

    }

})