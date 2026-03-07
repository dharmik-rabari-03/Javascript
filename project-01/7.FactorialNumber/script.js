document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault();


    let num = document.getElementById("number").value;

    let result = document.getElementById("result")

    let fact = 1;

    if (num < 0) {
        result.textContent = `${num} is Negative ,Factorial is not defined for negative numbers `
    }else{
        for(let i=1;i<=num;i++){
            fact =fact * i;
        }

        result.textContent=`Factorial Of  ${num} is ${fact}`;
    }


})