$(document).ready(function () {
  $("#image-slider > img#1").show();
  $("#page1").css("display", "flex");
  startSlider();
});

sliderStarted = false;
currentSlide = 1;
nextSlide = 2;

$("#prev").on("click", prev);
$("#next").on("click", next);

// stops image slider animations to queue up when you switch tabs
$(window).on("focus", function () {
  if (sliderStarted == false) {
    startSlider();
  }
});
$(window).on("blur", stopSlider);

function startSlider() {
  if (sliderStarted == false) {
    count = $("#image-slider > img").length;

    loop = setInterval(function () {
      if (nextSlide > count) {
        nextSlide = 1;
        currentSlide = count;
      }

      $("#image-slider > img#" + currentSlide).hide("slide", { direction: "left" }, 600);
      $("#image-slider > img#" + nextSlide).show("slide", { direction: "right" }, 600);

      currentSlide = nextSlide;
      nextSlide = nextSlide + 1;
    }, 4000)
    sliderStarted = true;
  }
}

function stopSlider() {
  window.clearInterval(loop);
  sliderStarted = false;
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

offset = $("#wrapper-header").offset();

$(window).scroll(function () {
  if ($(this).scrollTop() > offset.top) {
    $("#pre-header").hide();
    $("#wrapper-header").css("position", "fixed");
    $("#header").css("background-color", "rgba(40, 40, 40, 1)");
    $("#navbar").css("background-color", "rgba(80, 80, 80, 1)");
    $("#post-header").css("height", "860px");
  } else {
    $("#pre-header").show();
    $("#wrapper-header").css("position", "static");
    $("#header").css("background-color", "rgba(0, 0, 0, 0.7)");
    $("#navbar").css("background-color", "rgba(23, 23, 23, 0.3)");
    $("#post-header").css("height", "340px");
  }
});

visibility = $("#pocetna").offset();
isHoverHandled = false;
isHovered = false;

$(window).scroll(function () {
  if ($(this).scrollTop() > visibility.top - 180 && isHovered == false) {
    $(".wrapper-top").css("opacity", "0");
    isHoverHandled = true;
  } else {
    $(".wrapper-top").css("opacity", "1");
    isHoverHandled = false;
  }
});

$(".wrapper-top").on("mouseenter", function () {
  if (isHoverHandled) {
    isHovered = true;
    $(".wrapper-top").css("opacity", "1");
  }
});

$(".wrapper-top").on("mouseleave", function () {
  if (isHoverHandled) {
    isHovered = false;
    $(".wrapper-top").css("opacity", "0");
  }
});

$("#go-pocetna").click(function (e) {
  e.preventDefault();
  var pocetna = $("#pocetna").offset();
  $("html, body").animate({ scrollTop: pocetna.top - 180 }, 300);
  return false;
});
$("#go-o-nama").click(function (e) {
  e.preventDefault();
  var oNama = $("#o-nama").offset();
  $("html, body").animate({ scrollTop: oNama.top - 180 }, 300);
  return false;
});
$("#go-vijesti").click(function (e) {
  e.preventDefault();
  var vijesti = $("#vijesti").offset();
  $("html, body").animate({ scrollTop: vijesti.top - 180 }, 300);
  return false;
});
$("#go-galerija").click(function (e) {
  e.preventDefault();
  var galerija = $("#galerija").offset();
  $("html, body").animate({ scrollTop: galerija.top - 180 }, 300);
  return false;
});
$("#go-kontakt").click(function (e) {
  e.preventDefault();
  var kontakt = $("#kontakt").offset();
  $("html, body").animate({ scrollTop: kontakt.top - 180 }, 300);
  return false;
});

