//sum method 1 using function

function sum(a,b){
    let sum=a+b;

    console.log("sum : ",sum)

}

sum(15,10)

//method 2 using loop

const number=[10,20,30,40];
let result=0;

for(let i=0;i<number.length;i++){
    

    result+=number[i];
}

console.log("sum : ",result)


//method 3 sum using reduce

const numbers = [1,2,3,4,5];

let sums = numbers.reduce((a, b) => a + b);

console.log("sum : ",sums);