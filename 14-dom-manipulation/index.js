//using id

document.getElementById("btn").addEventListener("click", () => {

  let text = document.getElementById("id");

  text.innerHTML = "<h3>text changed</h3>"

  text.style.color = "red"

});


//using className


document.getElementsByClassName("btn")[0].addEventListener("click", () => {

  let result = document.getElementsByClassName("class1")[0]

  result.innerHTML = "<h3>text changed</h3>"



  result.style.color = "green"

})


//querySelector

let result2 = document.querySelector("#btn2")

result2.addEventListener("click", () => {


  result2.innerHTML = `hello`

})


//querySelectorAll


let resultP = document.querySelectorAll(".p")[0]
let resultP2 = document.querySelectorAll(".p")[1]
let resultP3 = document.querySelectorAll(".p")[2]

resultP.addEventListener("click", () => {

  resultP.innerHTML = `hello`
  resultP2.innerHTML = `hello`
  resultP3.innerHTML = `hello`

})

//by tag

let tag = document.getElementsByTagName("h2")[0]


tag.addEventListener("click", () => {

  tag.innerHTML = `text changed`

})