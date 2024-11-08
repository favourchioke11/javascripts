// alert("welcome");
index = 0;
let result = document.getElementById("result");
let num = document.getElementById("number");
let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");
let questionElement = document.getElementById("question-display");
let ul = document.getElementById("ul");
// let li = document.getElementById("li");
// let span = document.getElementById("span");
let quiz = document.querySelector(".question");
let currentQuestion = 0;
let scoreCount = 0;
let count = 10;

var questions = [
  {
    question: "In web design, what does CSS stands for?",
    options: [
      { opt: "Counter strike: source", correct: false },
      { opt: "Corrective style sheet", correct: false },
      { opt: "Computer style sheet", correct: false },
      { opt: "Cascading style sheet", correct: true },
    ],
    // correctAnswer: "Cascading style sheet",
  },

  {
    question: "HTML stands for?",
    options: [
      { opt: "Hyper Text Transfer Protocol", correct: false },
      { opt: "Hyper Transfer Mark-up Language", correct: false },
      { opt: "Hyper Text Mark-up Language", correct: true },
      { opt: "Hyper Text Mark-up Location", correct: false },
    ],
    // correctAnswer: "Hyper Text Mark-up Language",
  },

  {
    question: "HTTP stands for?",
    options: [
      { opt: "Hyper Text Transfer Protocol", correct: true },
      { opt: "Hyper Transfer Text Protocol", correct: false },
      { opt: "Hyper Text Transfer Position", correct: false },
      { opt: "Hyper Text Transition Protocol", correct: false },
    ],
    // correctAnswer: "Hyper Text Transfer Protocol",
  },

  {
    question: "what is the alphabet after C",
    options: [
      { opt: "B", correct: false },
      { opt: "D", correct: true },
      { opt: "A", correct: false },
      { opt: "E", correct: false },
    ],
    // correctAnswer: "D",
  },

  {
    question: "what is your name",
    options: [
      { opt: "Favour", correct: true },
      { opt: "Naza", correct: false },
      { opt: "Chioma", correct: false },
      { opt: "Dera", correct: false },
    ],
    // correctAnswer: "Favour",
  },
];

let score = 0;
let mark = 0;
let currentQuestionIndex = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  currentAnswerIndex = 0;
  score = 0;
  correctAnswer = 0;
  mark = 10;
  nextBtn.innerHTML = "Next";
  previousBtn.innerHTML = "Previous";
  showQuestion();
}


function showQuestion() {
  previous();
  next();
  
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  num.innerHTML = "Question "+ questionNo + "/" + questions.length
  num.classList.add("span")
  // let currentAnswer = questions[currentAnswerIndex];
  // let answerNo = currentAnswerIndex + 1;
  // let correctAns = answerNo + "." + currentAnswer.correctAnswer;

  currentQuestion.options.forEach(function (option) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.classList.add("span");
    li.innerHTML = option.opt;
    li.classList.add("li");
    ul.appendChild(li);

    if (option.correct) {
      li.dataset.correct = option.correct;
    }

    li.addEventListener("click", selectAnswer);
  });
}


function next() {
  // nextBtn.style.display = "none"
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function previous() {
  // previousBtn.style.display = "none"
  while (ul.firstElementChild) {
    ul.removeChild(ul.firstElementChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    // option.disabled = true;
    score += mark;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Array.from(ul.children).forEach((option) => {
  //   if (option.dataset.correct === "true") {
  //     option.classList.add("correct");
  //   }
  //   option.disabled = true;
  // });

  // nextBtn.style.display = "block";
  // previousBtn.style.display = "block";
}

function showScore() {
  next();
  previous();
  result.innerHTML = `You scored ${score} out of ${questions.length * 10}!`;
  // result.innerHTML = score +" out of "+ questions.length*10
  nextBtn.innerHTML = "Play Again";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function handlePreviousButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex.ul < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

previousBtn.addEventListener("click", () => {
  if (currentQuestionIndex.ul < questions.length) {
    handlepreviousButton();
  } else {
    startQuiz();
  }
});

startQuiz();

// function quizApp() {
//   questions = [];
//   question = [];
//   correctAnswer = [];

//   for (let questionElement = 0; questionElement < questions.length; questionElement++) {

//   }

//   for (let i = 0; i < questions.length; i++) {
//     var displayQuestion = questions[i].question;
//     var displayAnswer = questions[i].correctAnswer;

//     if (displayQuestion == displayAnswer) {
//       alert("correct");
//     } else if (displayQuestion !== displayAnswer) {
//       alert("wrong");
//     }
//     console.log(displayQuestion);
//     console.log(displayAnswer);
//     return;
//   }
// }

// var h1 = document.createElement("h1");
// var ul = document.createElement("ul");
// var li = document.createElement("li");
// var span = document.createElement("span");

// li.appendChild(span);
// ul.appendChild(li);
// ul.appendChild(span);
// quiz.appendChild(h1);
// h1.innerHTML = questions;
// quiz.appendChild(ul);

// next.addEventListener("click", function () {
//   questionCount++;
//   if (questionCount == questions.length) {
//     quiz.classList.add("hide")

//   }

// const selectedBtn = e.target;
// const isCorrect = selectedBtn.dataset.opt === correctAnswer;
// if (isCorrect) {
//   alert("correct answer");
//   scoreCount++;
// } else {
//   alert("incorrect");
// }

// Array.from(ul.children).forEach((li) => {
//   if (li.dataset.opt === correctAnswer) {
//     alert("correct answer");
//   }
// });

// let list = document.createElement("li");
// let span = document.createElement("span");
// span.innerHTML = "A";
// list.innerHTML = currentQuestion.options.opt1;
// list.classList.add("li");
// list.classList.add("span");
// ul.appendChild(list);

// let list2 = document.createElement("li");
// list2.innerHTML = currentQuestion.options.opt2;
// ul.appendChild(list2);

// let list3 = document.createElement("li");
// list3.innerHTML = currentQuestion.options.opt3;
// ul.appendChild(list3);

// let list4 = document.createElement("li");
// list4.innerHTML = currentQuestion.options.opt4;
// ul.appendChild(list4);

// list.addEventListener("click", selectAnswer);
// list2.addEventListener("click", selectAnswer);
// list3.addEventListener("click", selectAnswer);
// list4.addEventListener("click", selectAnswer);

// let userAnswer = "";

// for (let i = 0; i < questions.length; i++) {
//   // let userAnswer = "";
//   // const selectedBtn = e.target;
//   const userAnswer = selectedBtn.dataset.opti === "correctAnswer";

//   console.log(userAnswer);

//   if (userAnswer === questions[i].correctAnswer) {
//     alert("correct");
//   } else {
//     alert("wrong");
//   }
// }
