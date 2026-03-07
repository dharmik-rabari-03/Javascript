document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let signal=document.getElementById("signal").value

    let result=document.getElementById("result");


      if (signal === "red") {
        result.innerHTML = `<p style="color:red;">STOP</p> `;
    } 
    else if (signal === "yellow") {
        result.innerHTML = `<p style="color:black;">READY</p> `;
    } 
    else if (signal === "green") {
        result.innerHTML = `<p style="color:green;">GO</p> `;
    }
})