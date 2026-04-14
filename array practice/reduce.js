//reduce()
// This method uses a reducer function that reduces the results into a single output.

//example 1

console.log("example 1")
console.log()

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(num);

const total = num.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("Total :", total);

//example 2

console.log()
console.log("example 2")
console.log()

const shoping = [
  { name: "vegetables", price: 400 },
  { name: "fruit", price: 700 },
  { name: "grocery", price: 2000 },
  { name: "soft-drinks", price: 500 },
];

console.log(shoping)

console.log(
  "total bill ",
  shoping.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0),
);
