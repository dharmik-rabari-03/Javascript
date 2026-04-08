//1

let name="dharmik";

let array=name.split("");
let Reverse=array.reverse();
let Join=Reverse.join("")

console.log("using method 1 : ",Join)

//2

let name2="developer";

let result=""

for (let i = name2.length - 1; i >= 0; i--) {
    result+=name2[i];
}
console.log("using methos 2 :",result)

