document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let temp = document.getElementById("Temperature").value;
    let Type = document.getElementById("type").value;

    let result = document.getElementById("Result")

    if (Type === "CtoF") {
        let F = (temp * 9 / 5) + 32
        result.textContent = `Fahrenheit = ${F.toFixed(2)} °F`
    }
    else if (Type === "FtoC") {
        let C = (temp - 32) * 5 / 9;
        result.textContent=`Celsius = ${C.toFixed(2)} °C`
    }
})