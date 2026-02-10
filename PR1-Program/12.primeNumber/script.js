document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault();

    let num = document.getElementById("number").value

    let result = document.getElementById("result")

    let count = 0;

    if (num <= 1) {
        result.innerText = "Not a Prime Number";
    } else {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
        }

        if (count === 2) {
            result.innerText = "Prime Number";
        } else {
            result.innerText = "Not a Prime Number";
        }
    }
    });