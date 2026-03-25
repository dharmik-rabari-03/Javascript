//promise chain

//example 1

let Loan= new Promise((resolve,reject)=>{
    let loanRequest=true;

  setTimeout(()=>{
      if(loanRequest){
        resolve("loan request done")
    }else{
        reject("loan not be reqested")
    }
  },1000)

})

Loan.then((msg)=>{
    console.log(msg)
    return new Promise((resolve,reject)=>{
        let DocVerify=true;

        setTimeout(()=>{
            if(DocVerify){
                resolve("document verify successfull")
            }else{
                reject("document not verify")
            }
        },1000)
    })
})

.then((msg)=>{
    console.log(msg)
    return new Promise((resolve,reject)=>{
        let credit=true;

        setTimeout(() => {
            if(credit){
                resolve("credit score is good")
            }else{
                reject("credit score is low")
            }
        }, 1000);
    })
})
.then((msg) => {
    console.log(msg)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Loan approved 🎉");
            console.log("Amount will be credited soon 💰");
            
        }, 2000);
    });
})

.then((msg)=>{
    console.log(msg)
})

.catch((err)=>{
    console.log(err)
    console.log("loan not approved")
})

.finally(() => {
    setTimeout(() => {
        console.log("Thank you");
    }, 2000);
});



//example 2

//producing code.

let withdrawAmo=20000;
let balance=25000;

function withdrawRequest(){  
    return new Promise((resolve,reject)=>{
    
   

   setTimeout(()=>{
     if(withdrawAmo==0){
        reject("enter valid withdraw amount")
    }else {
        resolve("withdraw on way , plz wait..")
    }
   },1000)


});
}

function check(){ return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        if(withdrawAmo > balance){
            reject("esufficiant balance")
        }else{
            resolve("withdraw amount is valid")
        }
    },1000)

});
}

function otpVerification(){ 
    return new Promise((resolve,reject)=>{
    let otp=true;

    setTimeout(()=>{
        if(otp){
            resolve("verification done..")
        }else{
            reject("otp is wrong")
        }
    },1000)
});
}

function withdrawFinal(){ 
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("withdraw complete")
    },1000)
});
}

// consuming code


withdrawRequest().then((msg)=>{
    console.log(msg)
    return check()
})

.then((msg)=>{
    console.log(msg)
    return otpVerification()
})
.then((msg)=>{
    console.log(msg)
    return withdrawFinal()
})

 .then((msg)=>{
        console.log(msg);
    })

.catch((err)=>{
    console.log(err)
})

.finally(()=>{
    console.log("withdraw successfully.. thank you..")
})
