document.getElementById("btn").addEventListener("click",
    async function imges() {
        
        const img=document.getElementById("img")


        try {

            const api= await fetch("https://api.unsplash.com/photos/random?client_id=tE7UOZI-TDa9p_z6KPlwNVO9y58FkbkO3NJ3ivX10qE&query=cars")



            const data= await api.json()

            img.src = data.urls.regular;
          

        } catch (error) {
            console.log(error)
        }
    }
)