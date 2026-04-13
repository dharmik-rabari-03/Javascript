//find

let num = [1, 2, 3, 4, 5, 6,7, 8, 9];

console.log(num.find((a)=>a > 5))

//findIndex 

let index = num.findIndex((a)=> a > 5)

console.log(num[index])

num = [1, 2, 3, 4, 5, 6,7, 8, 9];
//some 

console.log("some : ",num.some((a)=> a > 5 ))

//every 

console.log("every : ",num.every((a)=> a > 0))