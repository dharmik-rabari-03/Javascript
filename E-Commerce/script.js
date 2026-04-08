let products = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    price: 1499,
    image: "https://i.pinimg.com/1200x/05/07/d1/0507d1d5b3e4452f2f8016bd04551aeb.jpg",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 2999,
    image: "https://i.pinimg.com/1200x/45/c7/f7/45c7f76e7fe0493f490072f3c08bcb6c.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse RGB",
    price: 799,
    image: "https://i.pinimg.com/736x/56/d8/85/56d8858a7bfed86529dfc3ac2cfc7816.jpg",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 2499,
    image: "https://i.pinimg.com/1200x/5e/f8/ff/5ef8fff54e2cb54e4806bc8a6d19417b.jpg",
  },
  {
    id: 5,
    name: "DSLR Camera",
    price: 45999,
    image:
      "https://i.pinimg.com/736x/8b/6b/3d/8b6b3d9602fa5c34422d4bf4f78a8989.jpg",
  },
  {
    id: 6,
    name: "Portable Speaker",
    price: 1199,
    image: "https://i.pinimg.com/originals/8e/a9/d1/8ea9d16a6377daab4d95946c237e5ed1.gif",
  },
  {
    id: 7,
    name: "Laptop Stand Aluminum",
    price: 699,
    image: "https://i.pinimg.com/1200x/ab/48/2e/ab482e7c3eab7ba23ab518db3df192b4.jpg",
  },
  {
    id: 8,
    name: "Smartphone 5G",
    price: 15999,
    image: "https://i.pinimg.com/736x/0e/35/d5/0e35d575b5c849524b982ee50527588f.jpg",
  },
  {
    id: 9,
    name: "Tablet 10 Inch",
    price: 12999,
    image: "https://i.pinimg.com/1200x/f1/7e/a8/f17ea81a65ccd410c94efcc8888d397d.jpg",
  },
  {
    id: 10,
    name: "Wireless Charger Pad",
    price: 599,
    image: "https://i.pinimg.com/736x/50/03/a7/5003a79c08e92cddfcf2eacb904f43e7.jpg",
  },
  {
    id: 11,
    name: "USB-C Hub Adapter",
    price: 899,
    image: "https://i.pinimg.com/736x/57/d8/2f/57d82f917e4f5e6ef0568f730196f1eb.jpg",
  },
  {
    id: 12,
    name: "External Hard Drive 1TB",
    price: 3499,
    image: "https://i.pinimg.com/1200x/78/2d/4d/782d4d9cea6b1dd588d3f504c7e93cf3.jpg",
  },
  {
    id: 13,
    name: "LED Ring Light",
    price: 999,
    image: "https://i.pinimg.com/1200x/4c/e7/f1/4ce7f12744bbc8b468e0d879426b1b2c.jpg",
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
    image: "https://i.pinimg.com/1200x/42/50/3f/42503f96155cf2067bc2e2234eb32265.jpg",
  },
  {
    id: 16,
    name: "Office Chair Ergonomic",
    price: 7999,
    image: "https://i.pinimg.com/1200x/c8/72/e1/c872e1bcff265f8c2f16621477eb62b2.jpg",
  },
  {
    id: 17,
    name: "Gaming Laptop",
    price: 75999,
    image: "https://i.pinimg.com/736x/4a/c7/cf/4ac7cfc85434cb832acfb6248775bad8.jpg",
  },
  {
    id: 18,
    name: "Power Bank 20000mAh",
    price: 1299,
    image: "https://i.pinimg.com/1200x/0b/0d/c1/0b0dc1e94c4ef4b300861e34bb747227.jpg",
  },
  {
    id: 19,
    name: "Smart LED TV 43 Inch",
    price: 22999,
    image: "https://i.pinimg.com/1200x/27/50/9f/27509fa9cfef7d244fdae0cf702473b8.jpg",
  },
  {
    id: 20,
    name: "Bluetooth Car Kit",
    price: 999,
    image: "https://i.pinimg.com/736x/ac/62/a2/ac62a2189ca628a8b122c7c20e4999df.jpg",
  },
];

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
        
    <button class="btn btn-outline-warning border-0" onclick="newUpdate(${p.id})">
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

  totalAmount();
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
  let total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  document.getElementById("total").innerHTML = `₹ ${total}`;
}

function checkout() {
  if (cartItems.length > 0) {
    alert("order placed");

    cartItems = [];
    update();
  } else {
    alert("no product in cart");
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
    image,
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();

  alert("Product Added");

  let modal = bootstrap.Modal.getInstance(
    document.getElementById("exampleModal2"),
  );
  modal.hide();
}

function Delete(id) {
  products = products.filter((p) => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
}

function newUpdate(id) {
  let modalUpdate = document.getElementById("exampleModal3");

  let modal = new bootstrap.Modal(modalUpdate);

  modal.show();

  let product = products.find((p) => p.id === id);

  if (!product) {
    return alert("product is not found");
  }

  let index = products.findIndex((p) => p.id === id);

  if (index == -1) {
    return alert("product is not found");
  }

  document.getElementById("newName").value = products[index].name;
  document.getElementById("newPrice").value = products[index].price;
  document.getElementById("newImg").value = products[index].image;

  const form = document.getElementById("form2")


  form.onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("newName").value;
    let price = document.getElementById("newPrice").value;
    let image = document.getElementById("newImg").value;

    products[index] = {
      ...products,
      name,
      price,
      image,
    };

    modal.hide();

    displayProducts();

  }

}
