var todos = [];

function addTodo() {
  var item = document.getElementById("todo").value;

  if (item == "") {
    alert("Field is empty");
  }

  let newTodo = {
    task: item,
    isDone: false,
  };
  
  todos.push(newTodo);

  document.getElementById("todo").value = "";
  console.log(todos);
  var list = document.getElementById("ul");

  for (let i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = todos[i].task
    list.appendChild(li);
  }
}




var todos = []

function addTodo() {
  var item = document.getElementById("todo").value;

  if (item == "") {
    alert("Field is empty")
  }
  document.getElementById("todo").value = ""
  var lists = document.getElementById("ul")

  var li = document.createElement("li")
  var btn = document.createElement("button")
  var span = document.createElement("span")
  var span2 = document.createElement("span")
  var input = document.createElement("input")
  // var para = document.createElement("p")
  input.setAttribute("type", "checkbox")

  span.innerHTML = "X"  
  btn.appendChild(span)
  li.appendChild(input)
  // para.innerHTML = "  " 
  li.appendChild(span2)
  li.appendChild(btn)
  lists.appendChild(li)
  
}

// function makeFunction(inputText){
//   var li = document.createElement("li")
//   var btn = document.createElement("button")
//   var span = document.createElement("span")
//   var span2 = document.createElement("span")
//   var input = document.createElement("input")
//   input.setAttribute("type", "checkbox")

//   span.innerHTML = "X"
//   btn.appendChild(span)
//   li.appendChild(input)
//   span2.innerHTML = inputText 
//   li.appendChild(span2)
//   li.appendChild(btn)
//   lists.appendChild(li)
// }

