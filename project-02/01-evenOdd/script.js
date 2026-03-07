
document.querySelector("button").addEventListener("click",()=>
{


   let number= Number(document.getElementById("evenOdd").value)
    


    let even=0;
    let odd=0;


    for(let i=1;i<=number;i++){
        

        if(i % 2 === 0){
            even++;
        }else{
            odd++
        }  
      }



       let result=document.getElementById("result")

        
    result.innerHTML="even number "+even+"<br>"+"odd Number "+odd

})