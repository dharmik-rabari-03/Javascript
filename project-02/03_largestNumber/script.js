
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()


    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    let num4 = Number(document.getElementById("num4").value)
    let num5 = Number(document.getElementById("num5").value)


    let numbers=[num1,num2,num3,num4,num5]

let largest = 0;

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > largest){
        largest = numbers[i]
    }

}

result.innerHTML ="<br>Largest Number: " + largest })