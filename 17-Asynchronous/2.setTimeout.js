//example 1

function bill(){

    console.log("Checking electricity bill...")
    let total=10000;
    setTimeout(function check(){
        console.log("total bill is : ",total)
    },3000)

}

bill()

//example 2


function holiday(){
    console.log("checking Today is holiday....")
    let isHoliday=true;
    setTimeout(()=>{
        if(isHoliday){
        console.log("yes , today is Holiday")
        }
    },4000)
}

holiday()