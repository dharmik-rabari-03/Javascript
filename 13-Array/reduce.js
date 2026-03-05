const num=[1,2,3,4,5,6,7,8,9,10]

// let sum=0;

// for(let i=0;i < num.length;i++){
//     sum+=num[i]
// }

// console.log(sum)

console.log(num.reduce((add,num)=>add+=num))

//examples


const person=[
    {name:"fruit",price:800},
    {name:"vegetables",price:500},
    {name:"grocery",price:3000},
]

let total=person.reduce((a,b) => {
    return (a= a+b.price)
},0)

console.log(total)


// console.log(person.reduce((a,b)=> {
//     return a+=b.price
// },0))

