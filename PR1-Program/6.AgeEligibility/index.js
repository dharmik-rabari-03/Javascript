document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let Age = Number(document.getElementById("Age").value);

    let result = document.getElementById("result");


    if (Age >= 60) {
        result.textContent = `Age ${Age} Is Senior Citizen (Vote + Drive ✔️)`
    } else if (Age >= 18) {
        result.textContent = `Age ${Age} Is Eligible For Vote And Drive ✔️`
    } else {
        result.textContent = `Age ${Age} Is Not Eligible For Vote And Drive ✖️`
    }

})