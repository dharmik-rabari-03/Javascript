//example 1

const student={
    name:"dharmik",
    age:"18",
    address:"sihor"
}


delete student.age;

console.log(student)

//HasOwnProperties

console.log(student.hasOwnProperty("age"))

//key

console.log(Object.keys(student))

//value

console.log(Object.values(student))

//example 2


const employee={
    name:"dharmik",
    age:"18",
    salary:"1,00,000"
}
console.log(employee)

delete employee.salary;

console.log(employee)


console.log(employee.hasOwnProperty("salary"))

console.log(Object.keys(employee))

console.log(Object.values(employee))
