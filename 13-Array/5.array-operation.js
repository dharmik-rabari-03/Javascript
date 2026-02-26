//for of

const brand = ["USPA", "lacoste", "dior", "hilfiger", "polo", "nike", "adidas"]


//this spend time more
console.log(brand[0])
console.log(brand[1])
console.log(brand[2])
console.log(brand[3])
console.log(brand[4])

//for
console.log("")
console.log("for loop")
console.log("")

for (let i = 0; i < brand.length; i++) {
    console.log(brand[i])
}

//for of
console.log("")
console.log("for of loop ")
console.log("")

for (let i of brand) {
    console.log(i)
}

//for each

console.log("")
console.log("for each")
console.log("")


brand.forEach((brand,i) => {
    console.log(i,brand)
})



//concat

const brand2 = ["toyota", "tata", "mahindra", "huyndai", "suzuki", "honda", "range rover"]


console.log("this is an concat ")
console.log(brand.concat(brand2))


//toString


console.log("to string")

console.log(brand.toString())