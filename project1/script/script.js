var counter = 0;
var display = document.getElementById("display");
display.innerHTML = counter;
console.log(counter);

function increase() {
  counter++;
  display.innerHTML = counter;
}

function decrease() {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  display.innerHTML = counter;
}

function reset() {
  counter = 0;
  display.innerHTML = counter;
}

// var show = (document.getElementById("show").onclick = showModal());
var container = document.getElementById("container");
var overlay = document.getElementById("overlay");

function showModal() {
  container.style.display = "block";
  overlay.style.display = "block";
}

function hide() {
  container.style.display = "none";
  overlay.style.display = "none";
}
