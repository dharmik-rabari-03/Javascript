//the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected


//example 1

let withdrawAmo = 2000;
let balance = 2500;

let withdraw = new Promise((resolve, reject) => {
    console.log("balance checking...")

    setTimeout(() => {
        if (withdrawAmo > balance) {
            reject("insuffiseint balance")
        } else if (withdrawAmo === 0) {
            reject("choose valid withdraw amount")
        } else {
            resolve(`Amount withdraw : ${withdrawAmo}`);
        }
    }, 1000)
})

withdraw.then((msg) => {
    console.log(msg)
    })

    .catch((err) => {
        console.log(err)
    })



//example 2

let number=2;

let numberCheck= new Promise((resolve,reject)=>{
    console.log("number checking...");

    setTimeout(()=>{
        if(number % 2 === 0){
            resolve(`given number ${number} is even`)
        }else{
            reject(`given number ${number} is odd`)
        }
    },1000)
})

numberCheck.then((even)=>{
    console.log(even)
})

.catch((odd)=>{
    console.log(odd)
})



