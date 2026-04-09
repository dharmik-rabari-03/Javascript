//iterating in array

let fruits = [
    "apple",
    "banana",
    "cherry",
    "mango",
    "guava",
    "strawberry",
    "pineapple",
];

//manually

console.log("usinng manualyy")


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);

console.log("")

//using loop

console.log("using for loop : ")

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i])
}

console.log("")

//using for of

console.log("using for of :")
for(let i of fruits){
    console.log(i)
}

console.log("")


//for each

console.log("using for each : ")

fruits.forEach((fruit)=>{
    console.log(fruit)
})


//concat

const num1=[1,2,3];
const num2=[4,5,6];

const concating=num1.concat(num2)


console.log("after concating : ", concating);
