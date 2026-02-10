document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()


    let age=document.getElementById("age").value;

    let result=document.getElementById("result");


    if(age <=0){
        result.textContent=`Enter Valid Age`;
    }else if(age <=5){
        result.textContent=`Ticket Price = Free`;
    }
    else if(age <=12){
        result.textContent=`Ticket Price = ₹100`;
    }
    else if(age <= 35){
        result.textContent=`Ticket Price = ₹150`
    }
    else if(age <=60){
        result.textContent=`Ticket Price = ₹200`
    }else{
        result.textContent=`Ticket Price = ₹140 (Senior Citizen)`
    }




}
)