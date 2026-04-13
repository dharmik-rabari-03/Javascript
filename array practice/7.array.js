//indexOf

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log(fruits.indexOf("cheery"))

//includes()

console.log("includes mango : ",fruits.includes("mango"))
console.log("includes banana : ",fruits.includes("banana"))

//sort()

//1

let alpha=["b","c","a","d"]

console.log("before sort :",alpha)
console.log("after sort :",alpha.sort())

//2

let number=[2,4,3,1,5,7,6]

console.log("before sort :",number)
console.log("after sort :",number.sort())

//descending order

console.log("descending : ",number.sort((a,b)=>{
    return b-a;
}))


