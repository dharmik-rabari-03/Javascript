
//👉 Match (Match The Value With object or aray, regular expression)

//Example 1

let Name="Dharmik";
console.log("Match 1=",Name.match("D"));

//if Not found It return null
console.log("Match 1=",Name.match("e"));

//Example 2

Name="alice"

console.log("Match 2=",Name.match("d"))
console.log("Match 2=",Name.match("a"))

//👉repeat (Reapet string number of copy)

//example 1

Name="Dharmik ragiya "

console.log("Repeat 1=",Name.repeat(3))

//example 2

let fruit="mango "

console.log("repeat 2=",fruit.repeat(3))

//👉Replace (it replace value of string)

//example 1

Name="dharmik ragiya"

console.log("Replace 1 =",Name.replace("r","R"))

//example 2

fruit="mengo"

console.log("Replace 2=",fruit.replace("mengo","MANGO"))

//👉 Replace All (it replace all the value in the string)

//example 1

Name="Dharmik ragiya"

console.log("replace all 1 =",Name.replaceAll("r","R"))

//example 2

fruit="pineapple"

console.log("replace all 2 =",fruit.replaceAll("p","P"))

//👉 search (search a string for a value , return the index of the match)

//example 1
console.log("search 1 =",Name.search("h"))


//example 2

console.log("search 2 =",fruit.search("n"))
console.log("search 2 =",fruit.search("d"))

//👉 slice (extract a part of string and return a new string)

//example 1

Name="Ragiya Dharmik"

console.log("Slice 1 =",Name.slice(10))
console.log("Slice 1 =",Name.slice(5,10))
console.log("Slice 1 =",Name.slice(7,14))
console.log("Slice 1 =",Name.slice(-2))

//example 2

fruit="apple"

console.log("slice 2=",fruit.slice(2))
console.log("slice 2=",fruit.slice(0,2))
console.log("slice 2=",fruit.slice(2,4))
console.log("slice 2=",fruit.slice(-4))

