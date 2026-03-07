document.getElementById("form").addEventListener("submit",(e)=>{

e.preventDefault();

    let Bill=Number(document.getElementById("Bill").value)
    let discount=Number(document.getElementById("discount").value)


    let result =document.getElementById("result");

    let discountAmo=Bill * discount /100;
    let FInalBill=Bill-discountAmo;


     result.innerHTML=`Total discount = ${discountAmo} <br> Final Bill = ${FInalBill}`
})