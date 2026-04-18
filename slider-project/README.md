# 🌄 Nature Image Slider

A simple and responsive **Image Slider (Carousel)** built using **HTML, CSS, and JavaScript**.
This project automatically cycles through images and also allows manual navigation using next and previous buttons.

---

## 🚀 Live Demo

🔗 https://slider-project-js03.netlify.app/

---
## 🚀 IMAGE
**1.**
<img width="1851" height="895" alt="image" src="https://github.com/user-attachments/assets/983fcc41-ee8f-4cd6-850b-0cf908eab000" />
**2.**
<img width="1810" height="887" alt="image" src="https://github.com/user-attachments/assets/4517ba35-0593-4376-ab0a-f92dd554aa1e" />


---


## 📌 Features

* 🔄 Auto image sliding every 3 seconds
* ⬅️➡️ Manual navigation (Next / Previous buttons)
* 📱 Responsive design
* ⚡ Lightweight and fast
* 🧠 Easy-to-understand JavaScript logic

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---



## ⚙️ How It Works

* An array stores image paths:

```js
const imges = [ "image1.jpg", "image2.jpg", ... ];
```

* `index` keeps track of the current image

* Functions:

  * `loadimg()` → loads current image
  * `nextimg()` → moves to next image
  * `previmg()` → moves to previous image

* Auto-slide using:

```js
setInterval(() => {
  nextimg();
}, 3000);
```
---

## 🙌 Author

**Dharmik**

---

