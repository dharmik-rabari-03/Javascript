//Spread Operator (...)

//example 1

let num1 = [1, 2, 3, 4];

let num2 = [...num1, 5, 6]

console.log(num2)


//example 2

let fruit = ["mango", "pinapple", "apple"]

console.log(...fruit)

// example 3

let student1 = { Name: "dharmik", Age: "18" }

let studentInfo = { ...student1, City: "Sihor" }

console.log(studentInfo)

// console.log(...Object.values(studentInfo))



//rest operator


//example 1

function Addnumber(...number) {
    console.log(number)
}

Addnumber(10, 20, 30)

//example 2

function showDetails(name, ...marks) {
    console.log("Name:", name);
    console.log("Marks:", marks);
}

showDetails("dharmik", 70, 80, 90);


