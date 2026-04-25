const num = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10];

function Find(){

    let count={}
    let unique=[]
    let repititive=[]

    for (let i = 0; i < num.length; i++) {
       
        let n=num[i]

        if(count[n]){
            count[n]+=1;
        }else{
            count[n]=1
        }
        
    }

    for(let key in count){

        if(count[key]===1){
            unique.push(Number(key))
        }else{
            repititive.push(Number(key))
        }

    }

    console.log("count",count)
    console.log("unique",unique)
    console.log("repititive",repititive)

}

Find()