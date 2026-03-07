document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();



    let num=document.getElementById("number").value

    let result=document.getElementById("result")

    let sum=0;

    for(let i=0;i<num.length;i++){
        sum=sum + Number(num[i])
    }



    result.textContent=`Sum Of Digit = ${sum}`

})