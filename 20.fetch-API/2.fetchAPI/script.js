document.getElementById("btn").addEventListener("click", async ()=>{
        
        const img=document.getElementById("img")


        try {

            const api= await fetch("https://dog.ceo/api/breeds/image/random")



            const data= await api.json()

            img.src = data.message;

            
          

        } catch (error) {
            console.log(error)
        }
    }
)