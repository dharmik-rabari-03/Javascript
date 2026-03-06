document.getElementById("btn").addEventListener("click", () => {

  let text = document.getElementById("id");

  text.innerHTML="<h3>text changed</h3>"

    text.style.color="red"
    
});



document.getElementsByClassName("btn")[0].addEventListener("click",()=>{

  let result =document.getElementsByClassName("class1")[0]

  result.innerHTML="<h3>text changed</h3>"



  result.style.color="green"

})
