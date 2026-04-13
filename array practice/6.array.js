//some
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

let marks=[10,20,30,40,50]

const result=marks.some((mark)=>mark >50)

console.log("result",result)

//Array reverse()

let reverse=marks.reverse();

console.log(reverse)

//value

let markIterator = marks.values();

for (key of markIterator) {
  console.log(key);
}
