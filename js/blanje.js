$(document).ready(function () {
	$("#image-slider > img#1").show();
	$("#page" + 1).css("display", "flex");
	startSlider();
});


// Image Slider

sliderStarted = false;
currentSlide = 1;
nextSlide = 2;
imageCount = $("#image-slider > img").length;

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

		loop = setInterval(function () {
			if (nextSlide > imageCount) {
				nextSlide = 1;
				currentSlide = imageCount;
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
		currentSlide = imageCount;
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

	if (newSlide == imageCount) {
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


// Dynamic Navbar

navbarOffset = $("#navbar").offset().top;
isNavbarFixed = false;
isNavbarHovered = false;

$(window).scroll(function () {
	if ($(this).scrollTop() > navbarOffset) {
		$("#navbar").css({ "position": "fixed", "top": "0" });
		$("#menu").css("background-color", "rgba(80, 80, 80, 1)");
		$("#post-header").css("height", "400px");
		isNavbarFixed = true;
	} else {
		$("#navbar").css("position", "static");
		$("#menu").css("background-color", "rgba(23, 23, 23, 0.3)");
		$("#post-header").css("height", "340px");
		isNavbarFixed = false;
		$("#menu").css("opacity", "1");
	}
});

$("#menu").on("mouseenter", function () {
		$("#menu").css("opacity", "1");
		isNavbarHovered = true;
});

$("#menu").on("mouseleave", function () {
		isNavbarHovered = false;
});

$(window).on("click", function () {
	if (isNavbarFixed && !isNavbarHovered) {
		$("#menu").css("opacity", "0");
	}
});


// Smooth scroll

$("#go-pocetna").click(function (e) {
	e.preventDefault();
	var pocetna = $("#pocetna").offset().top;
	$("html, body").animate({ scrollTop: pocetna - 60 }, 300);
	isHoverHandled = true;
	isSlidedByClick = true;
	return false;
});
$("#go-vijesti").click(function (e) {
	e.preventDefault();
	var vijesti = $("#vijesti").offset().top;
	$("html, body").animate({ scrollTop: vijesti - 60 }, 300);
	isHoverHandled = true;
	isSlidedByClick = true;
	return false;
});
$("#go-galerija").click(function (e) {
	e.preventDefault();
	var galerija = $("#galerija").offset().top;
	$("html, body").animate({ scrollTop: galerija - 60 }, 300);
	isHoverHandled = true;
	isSlidedByClick = true;
	return false;
});
$("#go-o-nama").click(function (e) {
	e.preventDefault();
	var oNama = $("#o-nama").offset().top;
	$("html, body").animate({ scrollTop: oNama - 60 }, 300);
	isHoverHandled = true;
	isSlidedByClick = true;
	return false;
});
$("#go-kontakt").click(function (e) {
	e.preventDefault();
	var kontakt = $("#kontakt").offset().top;
	$("html, body").animate({ scrollTop: kontakt - 60 }, 300);
	isHoverHandled = true;
	isSlidedByClick = true;
	return false;
});


// Gallery pages

currentPage = 1;

pageCount = $(".container-gallery-images").length;

$("#prev-page").on("click", function () {
	prevPage();
});

$("#next-page").on("click", function () {
	nextPage();
});

function prevPage() {
	newPage = currentPage - 1;

	if (newPage >= 1) {
		$(".container-gallery-images").hide();
		$("#page" + newPage).css("display", "flex");

		currentPage = newPage;
		newPage = newPage - 1;
	}

	if (newPage > 0) {
		$("#prev-page h3").html("Stranica " + newPage);
		$("#prev-page h3").fadeIn(300);
	} else {
		$("#prev-page h3").fadeOut(300);
	}
	$("#next-page h3").fadeIn(300);
	$("#next-page h3").html("Stranica " + (currentPage + 1));
}

function nextPage() {
	newPage = currentPage + 1;

	if (newPage <= pageCount) {
		$(".container-gallery-images").hide();
		$("#page" + newPage).css("display", "flex");

		currentPage = newPage;
		newPage = newPage + 1;
	}

	if (newPage < (pageCount + 1)) {
		$("#next-page h3").html("Stranica " + newPage);
		$("#next-page h3").fadeIn(300);
	} else {
		$("#next-page h3").fadeOut(300);
	}
	$("#prev-page h3").fadeIn(300);
	$("#prev-page h3").html("Stranica " + (currentPage - 1));
}