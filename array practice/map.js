//map
// This method iterates over an array, transforms the array according to user-specified conditions and returns a new array. Using this shorter syntax, one could easily make code more readable and understandable.

//example 1

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("before map ", num);
console.log(
  "before map ",
  num.map((x) => x * 5),
);

//example 2

const fruits = [
  "strawberry",
  "cheery",
  "watermelon",
  "grapes",
  "apple",
  "banana",
  "mango",
];

console.log(fruits.map((fruits) => fruits));

//example 3

const person = [
  { name: "dharmik", age: 18, city: "sihor" },
  { name: "prince", age: 18, city: "bvn" },
  { name: "ankit", age: 20, city: "bvn" },
  { name: "amit", age: 22, city: "bvn" },
  { name: "mohin", age: 18, city: "ghogha" },
  { name: "kalpesh", age: 18, city: "koliyak" },
];

console.log(person.map((a)=> a.name))
console.log(person.map((a)=> a.city))
console.log(person.map((a)=>a.age))