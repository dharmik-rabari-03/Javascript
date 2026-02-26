//accesing of array

//example 1

console.log("example 1 of accessing array")

const fruit = ["mango", "pineapple", "chery", "watermelon", "grapes"];
console.log("fruit array ", fruit)


//accessing using index , index start with 0

//accessing first element of array

console.log("first element = ", fruit[0])

//accessing random elemet of array

console.log("random element = ", fruit[3])

//last element of arrray

console.log("last element = ", fruit[fruit.length - 1])

//example 2

console.log("example 2 of accessing array")


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("number array ", number)

console.log("first element : ", number[0])
console.log("random element : ", number[3])
console.log("last element : ", number[number.length - 1])


//modifying element of array


//example 1

console.log("example 1 of modifying array")


console.log("before changing : ", fruit)

fruit[2] = "guava"

console.log("after changing : ", fruit)


//example 2

console.log("example 2 of modifying array")

const person = ["alice", "bob", "trump", "jordan"];

console.log("before modifying : ", person)

person[0] = "putin"

console.log("after modifying : ", person)


