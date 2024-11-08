// alert("welcome");
index = 0;
let result = document.getElementById("result");
let nextBtn = document.getElementById("next");
let previous = document.getElementById("previous");
let questionElement = document.getElementById("question-display")
let ul = document.getElementById("ul")
// let span = document.getElementById("span")
let quiz = document.querySelector(".question");
let currentQuestion = 0;
let scoreCount = 0;
let count = 10;


var questions = [
  {
    question: "In web design, what does CSS stands for?",
    options: {
      opt: "Counter strike: source",
      opt: "Corrective style sheet",
      opt: "Computer style sheet",
      opt: "Cascading style sheet",
    },
    correctAnswer: "Cascading style sheet",
  },

  {
    question: "HTML stands for?",
    options: {
      opt: "Hyper Text Transfer Protocol",
      opt: "Hyper Transfer Mark-up Language",
      opt: "Hyper Text Mark-up Language",
      opt: "Hyper Text Mark-up Location",
    },
    correctAnswer: "Hyper Text Mark-up Language",
  },

  {
    question: "HTTP stands for?",
    options: {
      opt: "Hyper Text Transfer Protocol",
      opt: "Hyper Transfer Text Protocol",
      opt: "Hyper Text Transfer Position",
    },
    correctAnswer: "Hyper Text Transfer Protocol",
  },

  {
    question: "what is the alphabet after C",
    options: {
    opt: "B",
    opt: "D",
    opt: "A",
    opt: "E",
    },
    correctAnswer: "D",
  },

  {
    question: "what is your name",
    options: {
      opt: "Favour",
      opt: "Naza",
      opt: "Chioma",
      opt: "Dera",
    },
    correctAnswer: "Favour",
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  scoreCount = 0;
  nextBtn.innerHTML = "Next";
  previous.innerHTML = "Previous";
  showQuestion();
}

function showQuestion() {
  next()
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1
  questionElement.innerHTML = questionNo + "." + currentQuestion.question

  currentQuestionIndex.options.forEach(option => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    span.classList.add("span")
    li.innerHTML = option.opt
    li.classList.add("li")
    ul.appendChild(li)

    if (option) {
      li.dataset.opt = option
    }

    li.addEventListener("click", selectAnswer)
    
  });
}

function next() {
  // nextBtn.style.display = "none"
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target 
  const isCorrect = selectedBtn.dataset.opt === correctAnswer 
  if (isCorrect) {
    alert("correct answer")
    scoreCount++
  }else{
    alert("incorrect")
  }

  Array.from(ul.children).forEach(li => {
    if (li.dataset.opt === correctAnswer) {
      alert("correct answer")
    }
  });
  nextBtn.style.display = "block"
  
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
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
})

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
// })
