document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value;

    let result=document.getElementById("result");

    if(weight <= 0 && height <=0){
        result.textContent="Enter valid Number"
    }



    let heightInMeter=height/100;

    let BMI=weight /(heightInMeter * heightInMeter);


    result.textContent=`Your BMI is ${BMI.toFixed(2)}`
})