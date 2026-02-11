//Argument


//example 

function sum() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    console.log("Total =", total);
}

sum(10, 20, 30, 40, 50, 60, 70, 80);


