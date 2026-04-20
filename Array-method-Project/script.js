let input = document.getElementById("input");
let select = document.getElementById("select");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let arrayDefualt=document.getElementById("arrayDefualt")

btn.addEventListener("click", function () {
  let arrInput = document.getElementById("array").value;
  let arr = arrInput.split(",").map(Number);

  let value = (input.value);
  let method = select.value;

  let output;

  switch (method) {
    case "push":
      arr.push(value);
      output = arr;
      break;

    case "unshift":
      arr.unshift(value);
      output = arr;
      break;

    case "pop":
      arr.pop();
      output = arr;
      break;

    case "shift":
      arr.shift();
      output = arr;
      break;

    case "length":
      output = arr.length;
      break;

    case "toString":
      output = arr.toString();
      break;

    case "reverse":
      output = arr.reverse();
      break;

    case "indexOf":
      output = arr.indexOf(value);
      break;

    case "includes":
      output = arr.includes(value);
      break;

    case "sort":
      output = arr.sort((a, b) => a - b);
      break;

    case "ascending":
      output = arr.sort((a, b) => a - b);
      break;

    case "descending":
      output = arr.sort((a, b) => b - a);
      break;

    case "map":
      output = arr.map((x) => x * value);
      break;

    case "filter":
      output = arr.filter((x) => x > value);
      break;

    case "some":
      output = arr.some((x) => x > value);
      break;

    case "every":
      output = arr.every((x) => x > value);
      break;

    case "find":
      output = arr.find((x) => x > value);
      break;

    case "findIndex":
      output = arr.findIndex((x) => x > value);
      break;

    case "reduce":
      output = arr.reduce((a, b) => a + b, 0);
      break;

    default:
      output = "Select a valid method";
  }

  result.innerText = output;
  arrayDefualt.innerText=`Array Value = ${arrInput}`
});
