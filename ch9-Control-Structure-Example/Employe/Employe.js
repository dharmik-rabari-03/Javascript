document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let salary = Number(document.getElementById("salary").value);
    let hraPercent = Number(document.getElementById("HRA").value);
    let daPercent = Number(document.getElementById("DA").value);
    let taPercent = Number(document.getElementById("TA").value);

    let HRA = (salary * hraPercent) / 100;
    let DA = (salary * daPercent) / 100;
    let TA = (salary * taPercent) / 100;
    
    let totalsalary = salary + DA + HRA + TA;


    document.getElementById("result").textContent =
        "Total Salary = " + totalsalary;
})