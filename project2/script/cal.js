// let num3;
// btn.addEventListener("click", solve())



// function solve(operation) {
//   var btn = document.getElementById("btn")
//   var num1 = parseInt(document.getElementById("num1").value);
//   var num2 = parseInt(document.getElementById("num2").value);

//   if (operation == "+") {
//     result = num1 + num2;
//     document.getElementById("result").innerHTML = result;
//     // num3 = 6;
//   } else if (operation == "-") {
//     result = num1 - num2;
//     document.getElementById("result").innerHTML = result;
//   } else if (operation == "/") {
//     result = num1 / num2;
//     document.getElementById("result").innerHTML = result;
//   } else if (operation == "*") {
//     result = num1 * num2;
//     document.getElementById("result").innerHTML = result;
//   } else if (operation == "clear") {
//     document.getElementById("result").innerHTML = 0;
//     document.getElementById("num1").value = 0;
//     document.getElementById("num2").value = 0;
//   }

 
// }



// // function solve(action) {
// //   // if (operate == "+") {
// //   //   result = num1 + num2;
// //    var num1 = parseInt(document.getElementById("num1").value);
// //   var num2 =parseInt(document.getElementById("num2").value);

// //   // }

// //   if (action == "+") {
// //     result = (num1) + (num2);
// //   document.getElementById("result").innerHTML = result;
// //     return result
// //   }else if(action == "-"){
// //     result = (num1+num2)
// //   document.getElementById("result").innerHTML = result;

// //   } else if(action =="clear"){
// //     document.getElementById("result").innerHTML = 0;
// //     document.getElementById("num1").value = 0;
// //     document.getElementById("num2").value = 0;

// //   }
// //   // document.getElementById("result").innerHTML = result;

// // }


// Get the input fields and result element
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultElement = document.getElementById("result");

// Get the buttons
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

// Add event listeners to the buttons
addBtn.addEventListener("click", () => solve("+"));
subtractBtn.addEventListener("click", () => solve("-"));
divideBtn.addEventListener("click", () => solve("/"));
multiplyBtn.addEventListener("click", () => solve("*"));
clearBtn.addEventListener("click", clear);
equalsBtn.addEventListener("click", calculate);

// Define the solve function
function solve(operation) {
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  let result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else {
    result = 0;
  }

  resultElement.innerHTML = result;
}

// Define the clear function
function clear() {
  num1Input.value = 0;
  num2Input.value = 0;
  result.value = 0;
  resultElement.innerHTML = 0;
}

// Define the calculate function
function calculate() {
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const result = num1 + num2;
  resultElement.innerHTML = result;
}