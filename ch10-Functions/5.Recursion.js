function factorial(Number) {
  console.log("num", Number);

  if (Number === 0) {
    return console.log(" Factorial is not define for negative number");
  } else if (Number === 1) {
    return 1;
  } else {
    return Number * factorial(Number - 1);
  }
}

let result = factorial(5);
console.log("factorial of 5 is", result);
