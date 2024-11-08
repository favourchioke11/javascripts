var todos = []

function addTodo() {
  var item = document.getElementById("todo").value;

  if (item == "") {
    alert("Field is empty")
    return
  }
  document.getElementById("todo").value = ""
  var lists = document.getElementById("ul")

  var li = document.createElement("li")
  var btn = document.createElement("button")
  var span = document.createElement("span")
  var span2 = document.createElement("span")
  var input = document.createElement("input")
  input.setAttribute("type", "checkbox")

  span.innerHTML = "X"  
  btn.appendChild(span)
  li.appendChild(input)
  span2.innerHTML = item 
  li.appendChild(span2).contentEditable = "true"
  li.appendChild(btn)
  lists.appendChild(li)


  // REMOVE LIST  

  btn.addEventListener("click", function () {
    lists.removeChild(li)
  })

  //COMPLETED LISTS

  input.addEventListener("click", function () {
    span2.classList.toggle("completed")
  })

  
  // span2.addEventListener("click", function () {
  //   contentEditable = "true"
  //   li.classList.toggle("edit")
  //   span2.contentEditable
  // })

}


