$(document).ready(function () {

  $("#image-slider > img#1").show();
  startSlider();

  $("#prev").on("click", prev);
  $("#next").on("click", next);

});

currentSlide = 1;
nextSlide = 2;

function startSlider() {
  count = $("#image-slider > img").length;

  loop = setInterval(function () {
    $("#image-slider").stop(true, true); // stops chrome from catching up when tab is out of focus
    if (nextSlide > count) {
      nextSlide = 1;
      currentSlide = count;
    }

    $("#image-slider > img#" + currentSlide).hide("slide", { direction: "left" }, 600);
    $("#image-slider > img#" + nextSlide).show("slide", { direction: "right" }, 600);

    currentSlide = nextSlide;
    nextSlide = nextSlide + 1;
  }, 4000)
}

function stopSlider() {
  window.clearInterval(loop);
}

function prev() {
  $("#prev").off();
  stopSlider();
  newSlide = currentSlide;

  if (newSlide == 1) {
    currentSlide = count;
  } else {
    currentSlide = newSlide - 1;
  }

  $("#image-slider > img#" + newSlide).hide("slide", { direction: "right" }, 600);
  $("#image-slider > img#" + currentSlide).show("slide", { direction: "left" }, 600, function () {
    $("#prev").on("click", prev);
  });

  nextSlide = currentSlide + 1;
  startSlider();
}

function next() {
  $("#next").off();
  stopSlider();
  newSlide = currentSlide;

  if (newSlide == count) {
    currentSlide = 1;
  } else {
    currentSlide = newSlide + 1;
  }

  $("#image-slider > img#" + newSlide).hide("slide", { direction: "left" }, 600);
  $("#image-slider > img#" + currentSlide).show("slide", { direction: "right" }, 600, function () {
    $("#next").on("click", next);
  });

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