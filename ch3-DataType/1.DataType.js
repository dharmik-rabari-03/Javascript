//premitive data type

//1.string

let string = "dharmik";

console.log(string);
console.log(typeof string);

//2.bigint

let BigInt = 7573068252n;

console.log(BigInt);
console.log(typeof BigInt);

//3.number

let number = 100;

console.log(number);
console.log(typeof number);

//4.undefine

let a;
console.log(typeof a);

//5.Boolean

let D = true;

console.log(D);
console.log(typeof D);

//6.symbol

let c = Symbol(10);
let d = Symbol(10);

console.log(c == d);

//7.null

let NULL = null;

console.log(typeof NULL);

//non-premitive data types

//8.object

const Student = { NAME: "Dharmik", Age: "18" };

console.log(Student);
console.log(typeof Student);

Student.NAME="prince"

console.log(Student)
