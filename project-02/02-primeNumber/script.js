document.getElementById("form").addEventListener("submit",(e)=>{
    
    e.preventDefault()

    let number = Number(document.getElementById("input").value)
    let result = document.getElementById("result")

    let prime = 0;

    for(let i = 2; i <= number; i++){

        let isPrime = true

        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isPrime = false
                break
            }
        }

        if(isPrime){
            prime += i + ", "
        }

    }

    result.innerHTML = prime

})