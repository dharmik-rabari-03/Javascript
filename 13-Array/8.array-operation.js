//indexof

const fruits = [
    "apple",
    "banana",
    "cheery",
    "mango",
    "watermelon",
    "grapes",
    "strawberry",
];

console.log(fruits.indexOf("mango"));
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("grapes"));

//includes

const fruits1 = [
    "apple",
    "banana",
    "cheery",
    "mango",
    "watermelon",
    "grapes",
    "strawberry",
];


console.log("fruit ", fruits1)

console.log("include ", fruits1.includes("mango")) //if include give true

console.log("include ", fruits1.includes("orange")) //if include give false



//sort

//alphbet sort

let numSort=["b","a","d","c","e","g","h"];

console.log("without sort : ",numSort)
console.log("with sort : ",numSort.sort())

//number sort

 numSort=[5,6,3,4,2,8,1,7,9];

console.log("without sort : ",numSort)
console.log("with sort : ",numSort.sort())


//ascending

console.log("ascending ")
console.log(numSort.sort((a,b)=>b-a))

//descending 

console.log("descending ")
console.log(numSort.sort((a,b)=>a-b))

