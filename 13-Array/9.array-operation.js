//find and findindex

//find
const num=[0,1,2,3,4,5,6,7,8,9,10]

console.log(num.find((value)=>value > 6))

//findIndex

console.log(num.findIndex((value)=>value > 8))


//some


console.log(num.some((num)=> num > 10))
console.log(num.some((num)=> num > 9))

//every

console.log(num.every((x)=> x >= 0))
console.log(num.every((x)=> x > 1))