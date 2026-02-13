document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
    let bill;

    if (unit <= 100) {
        bill = unit * 10
    } else if (unit <= 200) {
        bill = 100 * 10 + (unit - 100) * 20
    }
    else if (unit <= 300) {
        bill = 100 * 10 + 100 * 20 + (unit - 200) * 30
    }
    else if (unit >= 400) {
        bill = 100 * 10 + 100 * 20 + 100 * 30 + (unit - 300) * 40
    }
    else{
        result.innerText=`plz enter unit under 400`
    }

    result.innerText = `Total Bill ` + bill;
})