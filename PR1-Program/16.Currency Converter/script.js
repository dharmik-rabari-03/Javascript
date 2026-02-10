document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let money = Number(document.getElementById("money").value)
    let type = document.getElementById("type").value

    let result = document.getElementById("result")
    let rate = 90.71;

    if (type === "DollartoINR") {
        let INR = money * rate;
        result.textContent = `INR = ₹${INR.toFixed(2)}`
    } else if (type === "INRtoDollar") {
        let Dollar = money / rate;
        result.textContent = `DOLLAR = $${Dollar.toFixed(2)}`

    }
})