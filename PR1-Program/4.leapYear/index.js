document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();




    let year = document.getElementById("year").value

    let result = document.getElementById("result")


    if (year % 400 === 0) {
        result.textContent =`${year}  Is Leap Year`
    }
    else if (year % 100 === 0) {
        result.textContent =`${year}  Is Not Leap Year`

    } else if (year % 4 === 0) {
        result.textContent =`${year}  Is Leap Year`

    }
    else {
        result.textContent = `${year} Is Not Leap Year`

    }


})