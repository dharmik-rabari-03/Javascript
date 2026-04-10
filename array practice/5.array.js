//join
//aray to new string

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log("before join ", fruits);
console.log("after join ", fruits.join());


//flat()
//merge nested array

//one nested array

let num=[[1,2,3,4]]

console.log("before flat ",num)
console.log("after flat ",num.flat())


//two nested array

num = [
  [1, 2, 3],
  [4, 5, 6, [10, 11, 12]],
  [7, 8, 9],
];

console.log("flat 2 ", num.flat(2));


//infinity aaray nested

num = [
  [1, 2, 3, [4, 5, [6, 8, [10, [12]]]]],
  [4, 5, 6, [10, 11, [10, 12], 12]],
  [7, 8, 9, [10, 20, [30, [40, 50, [60, 70, [80]]]]]],
];

console.log(num);

console.log(num.flat(Infinity));


//slice (end excluded)

console.log(fruits)
console.log(fruits.slice(0,8))

