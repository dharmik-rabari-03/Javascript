let qnsIndexHTML = document.getElementById("qnsIndexHTML");
let qnsTimer = document.getElementById("qnsTimer");
let nextbtn = document.getElementById("nextbtn");
let qns = document.getElementById("qns");
let optionsDiv = document.getElementById("options");
let userAnswers = [];
let qnsIndex = 0;
let score = 0;
let selectedAnswer = null;

let TimerLeft = 30;
let interval;

let questions = [];

async function quiz() {
  try {
    let api = await fetch(
      "https://quizapi.io/api/v1/questions?api_key=qa_sk_8ab8f60ae66c8422b45e8310e4f52fef4b67ae63&tags=JavaScript&limit=5",
    );
    let data = await api.json();

    console.log(data);

    questions = data.data;

    if (!questions || questions.length === 0) {
      alert("No questions found!");
      return;
    }

    qnsIndex = 0;
    show();
  } catch (error) {
    console.error("Error:", error);
  }
}

quiz();

function show() {
  let current = questions[qnsIndex];

  qns.innerHTML = current.text;
  optionsDiv.innerHTML = "";
  timer();
  current.answers.forEach((ans, index) => {
    let btn = document.createElement("button");
    btn.className = "btn btn-outline-primary m-2 w-100";
    btn.innerHTML = ans.text;

    btn.onclick = () => {
      userAnswers[qnsIndex] = index;

      if (ans.isCorrect) {
        score++;
      }

      nextQns();
    };

    optionsDiv.appendChild(btn);
  });
}

function nextQns() {
  qnsIndex++;
  if (qnsIndex < questions.length) {
    show();
    qnsIndexHTML.innerHTML = `qns ${qnsIndex + 1}/${questions.length}`;
  } else {
    showResult();
  }
}
nextQns();

function showResult() {
  nextbtn.classList.add("d-none");

  document.getElementById("quizH1").innerHTML = "Quiz Result";

  qns.innerHTML = `Your Score: ${score}/${questions.length}
  <br>
  Percentage: ${(score / questions.length) * 100}%`;

  optionsDiv.innerHTML = "";
  qnsTimer.style.display = "none";
  clearInterval(interval);
}
function timer() {
  clearInterval(interval);
  TimerLeft = 30;
  qnsTimer.innerHTML = `Time Left : ${TimerLeft}`;

  interval = setInterval(() => {
    TimerLeft--;

    qnsTimer.innerHTML = `Time Left : ${TimerLeft}`;

    if (TimerLeft < 0) {
      nextQns();
    }
  }, 1000);
}
