//add or remove in array

let car = ["BMW", "mercedes", "toyota", "mahindra", "tesla"]

//push (add element from last)

console.log("before push", car)
car.push("tata")
console.log("after push", car)

//unshift (add element from start)

console.log("before unshift", car)
car.unshift("porsche")
console.log("after unshift", car)

//pop (remove element from last)

console.log("before pop", car)
car.pop()
console.log("after pop", car)

//shift (remove element from start)

console.log("before shift", car)
car.shift()
console.log("after shift", car)


console.log("")

//splice ("starting index", "delete count", "item", "item");

let fruits = ["apple", "banana", "cherry", "mango", "guava", "strawberry",];


//remove element

console.log("before remove ",fruits)
fruits.splice(0,1)
console.log("after remove ",fruits)

//replace

console.log("before replace ",fruits)
fruits.splice(0,1,"pineapple")
console.log("after replace ",fruits)

//add

console.log("before add ",fruits)
fruits.splice(0,0,"apple")
console.log("after add ",fruits)