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