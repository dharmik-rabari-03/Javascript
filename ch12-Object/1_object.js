// An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated

//👉 creating object using object literal syntax

//1

const Student = {
    name: "Dharmik",
    city: "sihor",
    age: "18",
    GrID: "11227"

}

console.log(Student)
console.log(typeof Student)


//2

const hotel = { name: "DS sky", rating: "5", room: "59", staff: "18" }

console.log(hotel)


// creating object using object constructor

//1
const person = new Object();

person.name = "Dharmik"
person.age = "18"
person.course = "FSD"

console.log("person =", person)

//2

const exam = new Object();

exam.name = "GPSC"
exam.date = "13/2/2026"
exam.time = "9:00 AM"
exam.Address = "BVN"

console.log("Exam Details =", exam)