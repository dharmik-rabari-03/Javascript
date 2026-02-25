//adding and remove element to the arrray
//adding element method

//push (add element in last)
// example 1

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("before add : ", number);
number.push(1);
console.log("after add : ", number);

//example 2

const person = ["gandhi", "putin", "trump", "jordan"];

console.log("before add : ", person);
person.push("modi");
console.log("after add : ", person);

//unshift (add element in first)

// example 1

console.log("before changing : ", number);
number.unshift(0);
console.log("after changing : ", number);

//example 2

console.log("before changing : ", person);
person.unshift("changuing");
console.log("after changing : ", person);

//remove element method

//pop (remove element in the last)

// example 1

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("before remove : ", num);
num.pop();
console.log("after remove : ", num);

// example 2

const persons = ["modi", "trump", "jecob", "mastani", "ghuvad", "gandhi"];

console.log("before remove : ", persons);
persons.pop();
console.log("after remove : ", persons);

//shift (remove element in the start of array)

//example 1

const nums = [0, 1, 2, 3, 4, 5];

console.log("before remove : ", nums);
nums.shift();
console.log("after remove : ", nums);

//example 2

const mobile = ["iphone", "samsung", "vivo", "oneplus", "oppo"];

console.log("before remove : ", mobile);
mobile.shift();
console.log("after remove : ", mobile);
