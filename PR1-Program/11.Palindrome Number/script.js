document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();


    let num=Number(document.getElementById("number").value)

    let result=document.getElementById("result");

    let temp=num;
    let rev=0;


    while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = (num - digit) / 10;   
}

  if (temp === rev) {
        result.innerText = "Palindrome Number ☑️";
    } else {
        result.innerText = "Not a Palindrome Number ✖️";
    }

})