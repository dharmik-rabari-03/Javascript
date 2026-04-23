let products = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    price: 1499,
    image:
      "https://i.pinimg.com/1200x/05/07/d1/0507d1d5b3e4452f2f8016bd04551aeb.jpg",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 2999,
    image:
      "https://i.pinimg.com/1200x/45/c7/f7/45c7f76e7fe0493f490072f3c08bcb6c.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse RGB",
    price: 799,
    image:
      "https://i.pinimg.com/736x/56/d8/85/56d8858a7bfed86529dfc3ac2cfc7816.jpg",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 2499,
    image:
      "https://i.pinimg.com/1200x/5e/f8/ff/5ef8fff54e2cb54e4806bc8a6d19417b.jpg",
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
    image:
      "https://i.pinimg.com/originals/8e/a9/d1/8ea9d16a6377daab4d95946c237e5ed1.gif",
  },
  {
    id: 7,
    name: "Laptop Stand Aluminum",
    price: 699,
    image:
      "https://i.pinimg.com/1200x/ab/48/2e/ab482e7c3eab7ba23ab518db3df192b4.jpg",
  },
  {
    id: 8,
    name: "Smartphone 5G",
    price: 15999,
    image:
      "https://i.pinimg.com/736x/0e/35/d5/0e35d575b5c849524b982ee50527588f.jpg",
  },
  {
    id: 9,
    name: "Tablet 10 Inch",
    price: 12999,
    image:
      "https://i.pinimg.com/1200x/f1/7e/a8/f17ea81a65ccd410c94efcc8888d397d.jpg",
  },
  {
    id: 10,
    name: "Wireless Charger Pad",
    price: 599,
    image:
      "https://i.pinimg.com/736x/50/03/a7/5003a79c08e92cddfcf2eacb904f43e7.jpg",
  },
  {
    id: 11,
    name: "USB-C Hub Adapter",
    price: 899,
    image:
      "https://i.pinimg.com/736x/57/d8/2f/57d82f917e4f5e6ef0568f730196f1eb.jpg",
  },
  {
    id: 12,
    name: "External Hard Drive 1TB",
    price: 3499,
    image:
      "https://i.pinimg.com/1200x/78/2d/4d/782d4d9cea6b1dd588d3f504c7e93cf3.jpg",
  },
  {
    id: 13,
    name: "LED Ring Light",
    price: 999,
    image:
      "https://i.pinimg.com/1200x/4c/e7/f1/4ce7f12744bbc8b468e0d879426b1b2c.jpg",
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
    image:
      "https://i.pinimg.com/1200x/42/50/3f/42503f96155cf2067bc2e2234eb32265.jpg",
  },
  {
    id: 16,
    name: "Office Chair Ergonomic",
    price: 7999,
    image:
      "https://i.pinimg.com/1200x/c8/72/e1/c872e1bcff265f8c2f16621477eb62b2.jpg",
  },
  {
    id: 17,
    name: "Gaming Laptop",
    price: 75999,
    image:
      "https://i.pinimg.com/736x/4a/c7/cf/4ac7cfc85434cb832acfb6248775bad8.jpg",
  },
  {
    id: 18,
    name: "Power Bank 20000mAh",
    price: 1299,
    image:
      "https://i.pinimg.com/1200x/0b/0d/c1/0b0dc1e94c4ef4b300861e34bb747227.jpg",
  },
  {
    id: 19,
    name: "Smart LED TV 43 Inch",
    price: 22999,
    image:
      "https://i.pinimg.com/1200x/27/50/9f/27509fa9cfef7d244fdae0cf702473b8.jpg",
  },
  {
    id: 20,
    name: "Bluetooth Car Kit",
    price: 999,
    image:
      "https://i.pinimg.com/736x/ac/62/a2/ac62a2189ca628a8b122c7c20e4999df.jpg",
  },
];

let productCard = document.getElementById("product");

let index = 0;

function ShowProduct() {
  productCard.innerHTML = "";

  products.forEach((p) => {
    productCard.innerHTML += `
    
     <div class="card">
                <div class="img">
                    <img src="${p.image}" alt="">
                </div>
                  <div class="name">
                    <p>${p.name}</p>
                </div>
                  <div class="price">
                    <p>${p.price}</p>
                </div>
                <div>
                <div class="d-flex justify-content-center mb-3">
                <button class="btn btn-outline-success" onclick="alerts()">Add To cart</button>
                <button class="btn btn-outline-danger" onclick="Deletes(${p.id})">Delete</button>
                <button class="btn btn-outline-warning" onclick="update(${p.id})">Edit</button>
             
                </div>
            </div>

    `;
  });
}
ShowProduct();

function Deletes(id) {
  products = products.filter((p) => p.id !== id);
  ShowProduct();
}

function update(id) {
  let modal = new bootstrap.Modal(document.getElementById("modal1"));
  modal.show();
  let findIndex = products.findIndex((p) => p.id === id);

  document.getElementById("NewName").value = products[findIndex].name;
  document.getElementById("NewPrice").value = products[findIndex].price;
  document.getElementById("Newimg").value = products[findIndex].image;

  let form = document.getElementById("form");

  form.onsubmit = function (e) {
    e.preventDefault();

    let Newname = document.getElementById("NewName").value;
    let NewPrice = document.getElementById("NewPrice").value;
    let image = document.getElementById("Newimg").value;

    products[findIndex] = {
      ...products,
      name: Newname,
      price: NewPrice,
      image: image,
    };
    modal.hide();

    ShowProduct();
  };
}

function AddProduct() {
  let modal = new bootstrap.Modal(document.getElementById("modal2"));
  modal.show();

  let form2 = document.getElementById("form2");

  form2.onsubmit = function (e) {
    e.preventDefault();

    let nameCreate = document.getElementById("newNames").value;
    let priceCreate = document.getElementById("price").value;
    let ImageCreate = document.getElementById("imgSrc").value;

    let newProduct = {
      name: nameCreate,
      price: priceCreate,
      image: ImageCreate,
    };

    products.push(newProduct);
    modal.hide();

    ShowProduct();
  };
}

function AddToList() {
  let modal = new bootstrap.Modal(document.getElementById("modal3"));
  modal.show();

  let tbody2 = document.getElementById("tbody2");

  tbody2.innerHTML = "";

 
}

function alerts(){
    alert("product Add")
}
