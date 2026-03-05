const num=[1,2,3,4,5,6,7,8,9,10]

console.log(num.filter((odd) => odd % 2 !== 0))
console.log(num.filter((even) => even % 2 === 0))


//example

console.log(num.filter((greator)=> greator > 5))
console.log(num.filter((less)=> less < 5))



//example


const person=[
    {name:"dharmik",age:18,address:"sihor"},
    {name:"ankit",age:21,address:"mahuva"},
    {name:"prince",age:18,address:"bvn"},
    {name:"amit",age:22,address:"bvn"},
]


console.log("greator or equil to 18",person.filter((p)=>p.age >= 18 ))
console.log("less or equil to 18",person.filter((p)=>p.age < 22 ))
console.log("greator 22",person.filter((p)=>p.age > 22))


console.log(person.filter((a)=> a.address == "bvn"))