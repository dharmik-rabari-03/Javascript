const person = {
    name: "Dharmik",
    City: "Sihor",
    Age: 18,
}



//using . notation


person.desgnation = "Software Developer"
console.log(person)


//using brackets []

person["Blood-Group"] = "o+";
console.log(person)


//third method 


function student(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

}

student.prototype.rank = 1;

const student1 = new student("dharmik", 18, "sihor", 1)
console.log("student detail :", student1.rank)
