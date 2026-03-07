

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let number=Number(document.getElementById("input").value)


    let result=document.getElementById("result")

    let reverse="";


    for(let i=number;i>=1;i--){
        
        if(i % 2 ===0){
            reverse+=i+" "
        }
    }

    result.innerHTML="reverse even number : <br>"+reverse
})