//example 1

function sum(result){
  
    console.log("sum =",result)
}

function check(a,b,callback){
    total=a+b;

   callback(total)
}

check(10,30,sum)


//example 2


function balance(result2){
    console.log("balance is =", result2)
}

function check2(amount, callback){
    let totalBalance = amount;

    callback(totalBalance) 
}

check2(123, balance)