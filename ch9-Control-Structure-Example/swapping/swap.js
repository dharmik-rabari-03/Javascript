// swapping using third variable


document.getElementById("button").addEventListener("click", (e) => {

    e.preventDefault();

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    document.getElementById("result");

    let temp = a;
    a = b;
    b = temp;

     result.innerHTML =
    "<b>Swapped Values</b><br>" +
    "a = " + a + "<br>" +
    "b = " + b;

});



//without third varible


// document.getElementById("swapBtn").addEventListener("click", () => {

//   let a = Number(document.getElementById("num1").value);
//   let b = Number(document.getElementById("num2").value);
//  document.getElementById("result");
//   a = a + b;
//   b = a - b;
//   a = a - b;

//  result.innerHTML =
//     "<b>Swapped Values</b><br>" +
//     "a = " + a + "<br>" +
//     "b = " + b;

// })