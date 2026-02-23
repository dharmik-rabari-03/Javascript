const person={
    name:"dharmik",
    age:18,
    address:"sihor"
}

for(let key in person){
    console.log(key + " : " + person[key])
}


//example 2

const variable={
    firstPriority:"const",
    secondPriority:"let",
    thirdPriority:"var"
}

for(let key in variable){
    console.log(key + " : " + variable[key])
}

