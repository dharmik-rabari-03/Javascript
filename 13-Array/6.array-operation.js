
//join() method (array to string)

const car = ["BMW", "mercedes", "ferrari", "toyota"];

console.log("array ",car)
console.log("join method ",car.join(" "));


//flat() (reduce  nested)



const num1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log("number ",num1)
console.log("flat ",num1.flat())



//infinity

const number=[
    [1,[20,30,[40]],2,3,[50]],
    [4,5,[20,[40,[10]]],6],
    [7,[10,[39]],8,9]
]

console.log("number ",number)

console.log("flat ",number.flat(Infinity))



//slice


const brand=["USPA",
    "nike",
    "adidas",
    "dior",
    "lacoste"
    ,"ck"]

console.log("brand array ",brand)
console.log("slice ",brand.slice(1,5))



