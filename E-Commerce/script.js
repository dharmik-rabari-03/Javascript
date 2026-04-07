let products = [
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


let cartItems = JSON.parse(localStorage.getItem("cartdata")) || [];

function addToCart(id) {
  try {
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


  alert("product added");
}

function ShowCart() {
  let cart = JSON.parse(localStorage.getItem("cartdata")) || [];

  let tbody = document.getElementById("t-body");

  tbody.innerHTML = "";

  cart.forEach((item) => {
    tbody.innerHTML += `
      <tr>

       
        <td >  
        <img src="${item.image}" class="img" width="60px" height="60px"; alt="${item.name}"
        </td>
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

  totalAmount()

}

function openCart() {
  ShowCart();

  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.show();
}



function update() {
  localStorage.setItem("cartdata", JSON.stringify(cartItems));

  ShowCart();
}

function increase(id) {
  let product = cartItems.find((p) => p.id === id);

  if (product) {
    product.quantity++;
  }
  update();
}


function decrease(id) {
  let product = cartItems.find((p) => p.id === id);

  if (product) {
    product.quantity--;
  }
  if (product.quantity <= 0) {
    cartItems = cartItems.filter((p) => p.id !== id);
  }

  update();
}

function remove(id) {
  cartItems = cartItems.filter((a) => a.id !== id);

  update();
}



function totalAmount(id) {

  let total = cartItems.reduce((acc, curr) =>
     acc + curr.price * curr.quantity, 0)

  document.getElementById("total").innerHTML =`₹ ${total}`;



}

function checkout() {

  if (cartItems.length > 0) {

    alert("order placed")

    cartItems = [];
    update()

  } else {
    alert("no product in cart")
  }
}


function addNewProduct() {

  let name = document.getElementById("name").value;
  let price = Number(document.getElementById("price").value);
  let image = document.getElementById("img").value;

  if (!name || !price || !image) {
    alert("all field required");
    return;
  }

  let newProduct = {
    id: Date.now(),
    name,
    price,
    image
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));


  displayProducts();

  alert("Product Added");

  let modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal2"));
  modal.hide();
}

function Delete(id){

  products = products.filter((p) => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
}

function openUpdateModal(){
    const myModal = new bootstrap.Modal(document.getElementById("exampleModal3"));
  myModal.show();
}

function newUpdate(id){

  let product=products.find((p)=>p.id === id)

   
   let newName=document.getElementById("newName").value
   let newPrice=Number(document.getElementById("newPrice").value)
   let newImg=document.getElementById("newImg").value

   if(!newName || !newPrice ||!newImg){
    alert("all field are required")
    return;
   }

    product.name = newName;
  product.price = newPrice;
  product.image = newImg;

  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();


}


function displayProducts() {

  let productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";

  products.forEach((p) => {
    productContainer.innerHTML += `
      <div class="card text-center" style="height:30rem">
        <img src="${p.image}" class="card-img-top" height="300px">
        <div class="card-body">
          <h5>${p.name}</h5>
          <p class="text-success h4">₹${p.price}</p>

         <div class="mb-3 ">
        
    <button class="btn btn-outline-warning border-0" onclick="openUpdateModal()">
✏️ Edit         </button>


          <button class="btn btn-outline-danger border-0" onclick="Delete(${p.id})">
            🗑️ Delete
          </button>
          
            <button class="btn btn-outline-primary border-2 mt-2 w-75" onclick="addToCart(${p.id})">
            Add To Cart
          </button>
          </div>
        </div>
      </div>
    `;
  });
}
displayProducts();
