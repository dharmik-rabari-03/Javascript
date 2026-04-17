let Questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    correctIndex: 2,
  },
  {
    id: 2,
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    correctIndex: 2,

  },
  {
    id: 3,
    question: "Which JavaScript method is used to select an element by ID?",
    options: [
      "getElementByClass()",
      "getElementById()",
      "querySelectorAll()",
      "getId()",
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Which CSS property controls spacing between elements?",
    options: ["padding", "margin", "spacing", "border"],
    correctIndex: 1,
  },
  {
    id: 6,
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "Laravel", "React", "Flask"],
    correctIndex: 2,
  },
  {
    id: 7,
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<src>", "<pic>"],
    correctIndex: 1,
  },
  {
    id: 8,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    correctIndex: 1,
  },
  {
    id: 9,
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctIndex: 0,
  },
  {
    id: 10,
    question: "Which HTML element is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correctIndex: 2,
  },
];

let QuizH1 = document.getElementById("QuizH1");
let qnsIndex = document.getElementById("qnsIndex");
let timer = document.getElementById("timer");
let qns = document.getElementById("qns");
let option = document.getElementById("option");
let nextbtn = document.getElementById("btn");
let results = document.getElementById("result");

let selectedANS = null;

let index = 0;
let time = 0;
let score = 0;
let userAns = [];

function loadQNS() {
  selectedANS = null;

  qns.innerHTML = `${index + 1}.${Questions[index].question}`;

  option.innerText = "";
  Questions[index].options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("btn", "btn-outline-warning", "w-100", "m-1");

    btn.addEventListener("click", () => {
      selectedANS = index;
      nextQNS();
    });

    option.appendChild(btn);
  });
}

function nextQNS() {
  userAns.push(selectedANS !== null ? selectedANS : null);

  if (selectedANS === Questions[index].correctIndex) {
    score++;
  }
  index++;

  if (index < Questions.length) {
    qnsIndex.innerHTML = `qns ${index + 1}/${Questions.length}`;

    loadQNS();
  } else {
    result();
  }
}

function result() {
  option.style.display = "none";
  nextbtn.style.display = "none";

  qns.innerHTML = `score ${score}`;

  Questions.forEach((qns, index) => {
    let Qnsshow = document.createElement("h1");
    Qnsshow.innerHTML = `${index + 1}.${Questions[index].question}`;

    let correctAnswer = document.createElement("p");
    correctAnswer.innerText = `correct Ans : ${Questions[index].options[Questions[index].correctIndex]}`;

   
   

    results.appendChild(Qnsshow);
    results.appendChild(correctAnswer);
    
  });
}
loadQNS();
