document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();


    let number=Number(document.getElementById("number").value);

    let result=document.getElementById("result");


    if(number%2==0){
        result.textContent=`The Number Is Even`
    }
    else{
        result.textContent=`The Number Is odd`
    }

})