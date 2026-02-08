document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let FirstNum = document.getElementById("FirstNumber").value;
  let SecondNum = document.getElementById("SecondNumber").value;
  let ThirdNum = document.getElementById("ThirdNumber").value;

  let result = document.getElementById("result");

  if (FirstNum >= SecondNum && FirstNum >= ThirdNum) {
    result.innerText = FirstNum + " is the largest number";
  } else if (SecondNum >= FirstNum && SecondNum >= ThirdNum) {
    result.innerText = SecondNum + " is the largest number";
  } else {
    result.innerText = ThirdNum + " is the largest number";
  }
});







