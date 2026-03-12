//syntax error

// cotsn age=19;
const age = 18;

console.log("syntax", age);

//run time error

let mark = 99;

// console.log("reference error",marks)
console.log("reference ", mark);

//try catch and finnaly

//example 1
console.log(" ")
console.log("example of try catch And finally")
console.log("example 1")
let Age = 17;

try {
  if (Age >= 18) {
    console.log("you can give vote");
  } else {
    throw new Error("you cannot give vote");
  }
} catch (Error) {
  console.log(Error.message);
} finally {
  console.log("age checked");
}

//example 2
console.log(" ")
console.log("example 2")

let withdrawAmount = 5000;
let balance = 6000;

try {
  if (withdrawAmount > balance) {
    throw new Error("Insufficient balance");
  }

  console.log("Withdraw successful");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Transaction finished");
}
