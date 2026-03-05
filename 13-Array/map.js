const num = [1, 2, 3, 4, 5]

const result = num.map((x) => x + 1)
console.log('new array', result)

const result2 = num.map((x) => x * 5)
console.log('new array', result2)

console.log("old array", num)


// example 2

const car = ["ferrari", "toyota", "porsche", "mercedes", "BMW"]


console.log(car.map((car) => car))


//example 



const personDetail = [
    { name: "dharmik", age: 18, city: "sihor" },
    { name: "ankit", age: 18, city: "sihor" },
    { name: "prince", age: 18, city: "sihor" },
]

console.log(personDetail.map((value) => value.name))


// console.log(personDetail((value)=>{
//     return value.name
// }))


