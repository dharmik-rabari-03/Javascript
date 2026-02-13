//Accessing Object Properties


const person = {
    name: "Dharmik",
    City: "Sihor",
    Age: 18,
    // City:"bvn" 
}

//Accessing the value of person detial using   .  Notation

console.log(person.name)
console.log(person.City)
console.log(person.Age)



// accessing using []

console.log(person["name"])
console.log(person["City"])
console.log(person["Age"])
// console.log(person["Ag"])  


//now Destructor

const { name, City, Age } = person;

console.log(name)
console.log(City)
console.log(Age)



