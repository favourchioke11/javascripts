let quizContainer = document.getElementById("question-display");
let result = document.getElementById("result");
let submitButton = document.getElementById("submit");


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

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(Questions, quizContainer, resultsContainer, submitButton);


function showQuestions(questions, quizContainer) {
  // we'll need a place to store the output and the answer choices
  var output = [];
  var answers;

  // for each question...
  for (var i = 0; i < questions.length; i++) {
    // first reset the list of answers
    answers = [];

    // for each available answer to this question...
    for (letter in questions[i].answers) {
      // ...add an html radio button
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          questions[i].answers[letter] +
          "</label>"
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
  }

  // finally combine our output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join("");
}

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer) {
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll(".options");

  // keep track of user's answers
  var userAnswer = "";
  var numCorrect = 0;

  // for each question...
  for (var i = 0; i < questions.length; i++) {
    // find selected answer
    userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "]:checked"
      ) || {}
    ).value;
    console.log(questions)

    // if answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[i].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[i].style.color = "red";
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
}


submitButton.onclick = function () {
  showResults(questions, quizContainer, resultsContainer);
};


