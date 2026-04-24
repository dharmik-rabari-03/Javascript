🛒 E-Commerce CRUD Web App (JavaScript Practice)

🔗 Live Demo:
👉 https://e-commerce-practicle03.netlify.app/

📌 Project Overview

This is a simple E-Commerce Web Application built using HTML, CSS, Bootstrap, and Vanilla JavaScript.
The project demonstrates CRUD operations, cart management, and local storage handling.

It is designed as a practice project to understand real-world frontend logic like product management and cart systems.

🚀 Features
🛍️ View Products
➕ Add New Product
✏️ Edit Product Details
❌ Delete Product
🛒 Add to Cart
🔢 Increase / Decrease Quantity
🧾 Total Price Calculation
💾 Data stored in LocalStorage
🔍 Search Products
🔃 Sort Products (Low → High / High → Low)
📦 Place Order (Clear Cart)
🧠 Concepts Used

DOM Manipulation
Event Handling
Array Methods (map, filter, reduce)
Local Storage (setItem, getItem)
Dynamic UI Rendering
Bootstrap Modals


⚙️ How It Works

🛍️ Product Management
Products are stored in an array
Displayed dynamically using ShowProduct()
➕ Add Product
Opens Bootstrap modal
Adds new product to array
Re-renders UI
✏️ Edit Product
Finds product by ID
Updates values using form input
❌ Delete Product
Removes product using filter()
🛒 Cart System
Cart data stored in localStorage
Key: "cartData"
localStorage.setItem("cartData", JSON.stringify(cartItems));
➕ Add to Cart

If product exists → increase quantity
Else → add new item
🔢 Quantity Control
Increase ➕
Decrease ➖
Auto remove if quantity = 0

💰 Total Price
Calculated using reduce()
total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
🔍 Search Function

Filters products based on name
products.filter((p) => p.name.toLowerCase().includes(value));
🔃 Sorting
Low to High
High to Low
products.sort((a, b) => a.price - b.price);

🖥️ UI Components
Navbar with:
Cart Button
Add Product Button
Sort Dropdown
Search Bar
Product Cards
Bootstrap Modals:
Add Product
Edit Product
Cart View

🛠️ Technologies Used
HTML5
CSS3
Bootstrap 5
JavaScript (ES6)

<img width="1903" height="940" alt="image" src="https://github.com/user-attachments/assets/58db2bbf-1992-404c-8445-db9e1f142874" />




🧑‍💻 Author

Dharmik
