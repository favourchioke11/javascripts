var index = 0;
var timeout = 4000;

var sliders = document.querySelectorAll(".slider");
initialSlide();

function initialSlide() {
  sliders[index].classList.add("display_slide");
  setInterval(next,timeout)

}

function showSlide(i) {
    if (i >= sliders.length) {
        index = 0
    }else if (i < 0){
        index = sliders.length -1
    }

    sliders.forEach(slide => {
        slide.classList.remove("display_slide")
    });
    sliders[index].classList.add("display_slide");

   
}

function next() {
  index++
  showSlide(index)
}

function previous() {
    index--
    showSlide(index)
}
