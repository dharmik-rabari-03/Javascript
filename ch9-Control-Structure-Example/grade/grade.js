
document.getElementById("form").addEventListener("submit", (e)=> {
    e.preventDefault();

    let marks = document.getElementById("mark").value;
    let result = document.getElementById("result");


    if (marks >= 90) {
        result.innerText = `Achive A grade`;
    } 
    else if (marks >= 80) {
        result.innerText = `Achive B grade`;
    } 
    else if (marks >= 70) {
        result.innerText = `Achive C grade`;
    } 
    else if (marks >= 35) {
        result.innerText = `Achive D grade`;
    } 
    else {
        result.innerHTML =  `<h1 style="color:red;">  Fail</h1>` ;

        
        
    }
});
