document.getElementById("btn").addEventListener("click", async ()=>{


        try {
            const result = document.getElementById("quote")

            const quoteAPI = await fetch("https://dummyjson.com/quotes/random")

            const data = await quoteAPI.json();

            result.textContent=` "${data.quote}" — ${data.author}`

        } catch (error) {
            document.getElementById("quote").innerText = "Error!";
        }

    }
)