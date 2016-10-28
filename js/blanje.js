$(document).ready(function () {

  $("#image-slider > img#1").show();
  startSlider();

});

currentSlide = 1;
nextSlide = 2;

function startSlider() {
  count = $("#image-slider > img").length;

  loop = setInterval(function () {
    $("#image-slider").stop(true, true);
    if (nextSlide > count) {
      nextSlide = 1;
      currentSlide = count;
    }

    $("#image-slider > img#" + currentSlide).hide('slide', { direction: "left" }, 600);
    $("#image-slider > img#" + nextSlide).show('slide', { direction: "right" }, 600);

    currentSlide = nextSlide;
    nextSlide = nextSlide + 1;
  }, 4000)
}

/*function prev() {
  newSlide = currentSlide - 1;
  showSlide(newSlide);
}
 
function next() {
  newSlide = currentSlide + 1;
  showSlide(newSlide);
}*/

function stopSlider() {
  window.clearInterval(loop);
}

function prev() {
  //$("#image-slider").stop(true, true);
  stopSlider();
  newSlide = currentSlide;

  if (newSlide == 1) {
    currentSlide = count;
  } else {
    currentSlide = newSlide - 1;
  }

  $("#image-slider > img#" + newSlide).hide('slide', { direction: "right" }, 600);
  $("#image-slider > img#" + currentSlide).show('slide', { direction: "left" }, 600);

  nextSlide = currentSlide + 1;
  startSlider();
}

function next() {
  //$("#image-slider > img").stop(true, true);
  stopSlider();
  newSlide = currentSlide;

  if (newSlide == count) {
    currentSlide = 1;
  } else {
    currentSlide = newSlide + 1;
  }

  $("#image-slider > img#" + newSlide).hide('slide', { direction: "left" }, 600);
  $("#image-slider > img#" + currentSlide).show('slide', { direction: "right" }, 600);

  nextSlide = currentSlide + 1;
  startSlider();
}

$("#image-slider > img").hover(
  function () {
    stopSlider();
  },
  function () {
    startSlider();
  }
);