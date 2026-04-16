const imges = [
  "image/pexels-65593884-37052225.jpg",
  "image/pexels-brenda-holland-630596156-29270283.jpg",
  "image/pexels-jplenio-1126379.jpg",
  "image/pexels-robshumski-1903702.jpg",
  "image/pexels-kevin-jabar-20919178-6570276.jpg",
  "image/pexels-u-ran-goo-2153815917-37011564.jpg",
  "image/pexels-sanket-barik-2808574-7846475.jpg",
];

let img = document.getElementById("img");
let index = 0;

function loadimg() {
  img.src = `${imges[index]}`;
}

function nextimg() {
  index++;

  if (index >= imges.length) {
    index = 0;
  }
  loadimg();
}

function previmg() {
  index--;

  if (index < 0) {
    index = imges.length - 1;
  }

  loadimg();
}
loadimg();

setInterval(() => {
  nextimg();
}, 3000);
