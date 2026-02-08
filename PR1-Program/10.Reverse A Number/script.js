document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let num = document.getElementById("number").value

    let reverse = 0;

    let result = document.getElementById("result")


    for (; num > 0; num = parseInt(num / 10)) {
        reverse = reverse * 10 + (num % 10);
    }



    result.textContent=`reverse number = ${reverse}`





})