//👉 split (split string into array)

//example 1

let Name="dharmik"

console.log("split 1 =",Name.split(" "))
console.log("split 1 =",Name.split(""))
console.log("split 1 =",Name.split("R"))

//example 2

let fruit="mango"

console.log("split 2 =",fruit.split(" "))
console.log("split 2 =",fruit.split(""))
console.log("split 2 =",fruit.split("p"))

//👉 Start With (start with method , specified character)

//example 1

console.log("start with 1 =",Name.startsWith("d"))
console.log("start with 1 =",Name.startsWith("r"))

//example 2

console.log("start with 2=",fruit.startsWith("m"))
console.log("start with 2=",fruit.startsWith("p"))

//👉 substring (extract character between two position)

//example 1

console.log("fruit ",fruit)

console.log("substring 1=",fruit.substring(0,3))

// example 2

console.log("Name ",Name)
console.log("substring 2=",Name.substring(0,6))
console.log("substring 2=",Name.substring(-1))


//👉 to lower case (return a value converted to lower case)
//example 1
Name="DHARMIK"

console.log("lower case =",Name.toLowerCase())

//example 2
fruit ="APPLE"
console.log("lower case =",fruit.toLowerCase())


//👉 to upper case (return a value converted to uppper case)
//example 1
Name="dharmik"

console.log("upper case =",Name.toUpperCase())

//example 2
fruit ="apple"
console.log("upper case =",fruit.toUpperCase())

//👉 trim (return a string removing space)

//example 1

let text="    hello    "

console.log("length 1=",text.length)
console.log("trim 1=",text.trim().length)

//example 2

fruit="   mango    "

console.log("length 2=",fruit.length)
console.log("trim 2=",fruit.trim().length)


//starting trim (remove the starting space only)

//example 1

text="    hello"

console.log("length start 1=",text.length)
console.log("trim start 1=",text.trimStart().length)

//example 2



text="  hello       "

console.log("length start 2=",text.length)
console.log("trim start 2=",text.trimStart().length)


//end trim (remove the ending space only)

//example 1

let greet="good   "

console.log("lenght end 1 =",greet.length)
console.log("trim end 1 =",greet.trimEnd().length)

//example 2


greet="  well   "

console.log("lenght end 2 =",greet.length)
console.log("trim end 2 =",greet.trimEnd().length)

