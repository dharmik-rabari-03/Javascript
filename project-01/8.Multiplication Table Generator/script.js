document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let num = Number(document.getElementById("Multiplication").value)
    let result = document.getElementById("result")


    result.innerHTML = `<br><br> <h2 >Table Generated of <b style="color:green;">${num}</b></h2> <br><br><br> ` // clear old result


    for (let i = 1; i <= 10; i++) {
        result.innerHTML += `<h3>${num} * <b style="color:green">${i}</b> =  <b style="color:red;"> ${num * i}</b></h3>`

    }

})


    