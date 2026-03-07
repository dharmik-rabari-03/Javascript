document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let balance = Number(document.getElementById("balance").value)
    let withdrawal = Number(document.getElementById("Withdrawal").value)

    let result = document.getElementById("result")


    if (withdrawal <= 0) {
        result.textContent = `invalid withdrawel Amount ✖️`
    }
    else if (withdrawal > balance) {
        result.innerText = `Insufficient balance ✖️`;

    }
    else{
        balance = balance - withdrawal;
        result.innerHTML = "Withdrawal Successful ☑️ <br> Remaining Balance: ₹" + balance;
    }


})