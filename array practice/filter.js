//filter
// This method is used to filter out the contents, as per the user-specified condition, in the form of a new array.

//example 1

let num=[1,2,3,4,5,6,7,8,9,10]

let evenNum=num.filter((num)=>num % 2 === 0)

console.log(evenNum)

//example 2

console.log("greater than 5 ",num.filter((x)=>x > 5))

//example 3


const person = [
  { name: "dharmik", age: 18, city: "sihor" },
  { name: "prince", age: 18, city: "bvn" },
  { name: "ankit", age: 20, city: "bvn" },
  { name: "amit", age: 22, city: "bvn" },
  { name: "mohin", age: 18, city: "ghogha" },
  { name: "kalpesh", age: 18, city: "koliyak" },
];

console.log("age greater than 19",person.filter((x)=> x.age > 19))