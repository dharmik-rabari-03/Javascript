//async await

//example 1 (student mark)
// let mark = 32;


// function getMark() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("mark entered")
//         }, 1000);
//     })
// }


// function checkMark() {

//     return new Promise((resolve, reject) => {
//         console.log("mark checking...")

//         setTimeout(() => {

//             if (mark < 33) {
//                 reject("you are fail")

//             } else {
//                 resolve("congratulation you are pass")
//             }
//         }, 1000);
//     })
// }

// async function result() {

//     try {
//         let getmarks = await getMark();
//         console.log(getmarks)

//         let checkmark = await checkMark();
//         console.log(checkmark)
//     }

//     catch (err) {
//         console.log(err)
//     } finally{
//         console.log("thank you..")
//     }

// }

// result()


//example 2

let ticketRequest = true;
let ticket = true;
let ticketfinal = true;
let paymentdone = true;





async function ticketrun() {

    try {
        const ticketavailability =await new Promise((resolve, reject) => {

            console.log("ticket availibilty check")

            setTimeout(() => {
                if (ticket) {
                    resolve("ticket availble")
                } else {
                    reject("sorry no ticket available")
                }
            }, 1000)
        })
    console.log(ticketavailability)


        const Requests =await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ticketRequest) {
                    resolve("ticket request successfully")
                } else {
                    reject("ticket request failed")
                }
            }, 1000);
        })
        console.log(Requests)


        const payment =await new Promise((resolve, reject) => {

            console.log("check payment")

            setTimeout(() => {
                if (paymentdone) {
                    resolve("payment successfullly done")
                } else {
                    reject("payment fail")
                }
            }, 1000);


        })
        console.log(payment)

        const ticketConform =await new Promise((resolve, reject) => {
            console.log("check ticket conform or not")

            setTimeout(() => {
                if (ticketfinal) {
                    resolve("ticket conform")
                } else {
                    reject("sorry ticket not conform")
                }
            }, 1000);
        })
        console.log(ticketConform)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("thank you")
    }



}

ticketrun()
