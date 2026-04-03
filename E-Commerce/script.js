const products = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    price: 1499,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 2999,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
  {
    id: 3,
    name: "Gaming Mouse RGB",
    price: 799,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 2499,
    image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
  },
  {
    id: 5,
    name: "DSLR Camera",
    price: 45999,
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
  },
  {
    id: 6,
    name: "Portable Speaker",
    price: 1199,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
  },
  {
    id: 7,
    name: "Laptop Stand Aluminum",
    price: 699,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 8,
    name: "Smartphone 5G",
    price: 15999,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
  },
  {
    id: 9,
    name: "Tablet 10 Inch",
    price: 12999,
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
  },
  {
    id: 10,
    name: "Wireless Charger Pad",
    price: 599,
    image: "https://images.pexels.com/photos/4526415/pexels-photo-4526415.jpeg",
  },
  {
    id: 11,
    name: "USB-C Hub Adapter",
    price: 899,
    image: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg",
  },
  {
    id: 12,
    name: "External Hard Drive 1TB",
    price: 3499,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
  },
  {
    id: 13,
    name: "LED Ring Light",
    price: 999,
    image: "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg",
  },
  {
    id: 14,
    name: "Fitness Tracker Band",
    price: 1499,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
  },
  {
    id: 15,
    name: "Noise Cancelling Earbuds",
    price: 1999,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
  },
  {
    id: 16,
    name: "Office Chair Ergonomic",
    price: 7999,
    image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
  },
  {
    id: 17,
    name: "Gaming Laptop",
    price: 75999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 18,
    name: "Power Bank 20000mAh",
    price: 1299,
    image: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg",
  },
  {
    id: 19,
    name: "Smart LED TV 43 Inch",
    price: 22999,
    image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
  },
  {
    id: 20,
    name: "Bluetooth Car Kit",
    price: 999,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
];

const productContainer = document.getElementById("product-list");

products.forEach((p) => {
  productContainer.innerHTML += `

  <div class="card text-center " style="height:30rem">
  <img src="${p.image}" class="card-img-top" width="100%" height="300px"; alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">₹${p.price}</p>
    <button class="btn btn-primary" onclick="addToCart(${p.id})">Add To Cart</button>
  </div>
</div>

  `;
});



function addToCart(id) {
  try {

    let cartItems = JSON.parse(localStorage.getItem("cartdata")) || [];

    let product = cartItems.find((prod) => prod.id === id);

    if (product) {
      product.quantity++;
    } else {
      product = products.find((prod) => prod.id === id);
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartdata", JSON.stringify(cartItems));


  } catch (error) {
    console.log(error);
  }
}

function ShowCart() {
  let cart = JSON.parse(localStorage.getItem("cartdata")) || [];

  let tbody = document.getElementById("t-body");

  tbody.innerHTML = "";

  cart.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>
      
        <div class="d-flex ">
          <button class="btn btn-success m-2" onclick="increase(${item.id})">+</button>

       <p class="fs-3 m-2"> ${item.quantity}</p>
        
        <button class="btn btn-danger m-2" onclick="decrease(${item.id})">-</button></div>

        </td>


        <td>₹${item.price * item.quantity}</td>


        <td>
        <button class="btn btn-outline-danger m-2" onclick="remove(${item.id})">Remove</button>
        </td>


      </tr>
    `;
  });

  



}

function openCart(){
  ShowCart();

  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.show();
}


function increase(id) {

  let data = JSON.parse(localStorage.getItem("cartdata"))

  let item = data.find((p) => p.id === id)


  if (item) {

    item.quantity++;

  }
  localStorage.setItem("cartdata", JSON.stringify(data));


  ShowCart()

}

function decrease(id) {

  let data = JSON.parse(localStorage.getItem("cartdata")) || []

  let item = data.find((p) => p.id === id)

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {

      data = data.filter((p) => p.id !== id)

    }

  }


  localStorage.setItem("cartdata", JSON.stringify(data));


  ShowCart()


}

function remove(id) {

  let data = JSON.parse(localStorage.getItem("cartdata")) || []

  data = data.filter((p) => p.id !== id)

  localStorage.setItem("cartdata", JSON.stringify(data))

  ShowCart()
}

