// function for display the next image in the carousel
function nextImg() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  var bltActive = $(".bullet.active");
  bltActive.removeClass("active");

  if (imgActive.hasClass("last")) {
    $("img.first").addClass("active");
    $(".bullet.first").addClass("active");
  } else {
    imgActive.next().addClass("active");
    bltActive.next().addClass("active");
  }
}

// function for display the previous image in the carousel
function prevImg() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  var bltActive = $(".bullet.active");
  bltActive.removeClass("active");

  if (imgActive.hasClass("first")) {
    $("img.last").addClass("active");
    $(".bullet.last").addClass("active");
  } else {
    imgActive.prev().addClass("active");
    bltActive.prev().addClass("active");
  }
}

// function for display the correct image when click on the bullet
function bulletSelect() {
  $(".bullet").removeClass("active");
  $(this).addClass("active");

  $("img.active").removeClass("active");

  if ($(this).hasClass("bullet-0")) {
    $("[src=\"img/img_0.jpg\"]").addClass("active");
  } else if ($(this).hasClass("bullet-1")) {
    $("[src=\"img/img_1.jpg\"]").addClass("active");
  } else if ($(this).hasClass("bullet-2")) {
    $("[src=\"img/img_2.jpg\"]").addClass("active");
  } else if ($(this).hasClass("bullet-3")) {
    $("[src=\"img/img_3.jpg\"]").addClass("active");
  } else if ($(this).hasClass("bullet-4")) {
    $("[src=\"img/img_4.jpg\"]").addClass("active");
  } else if ($(this).hasClass("bullet-5")) {
    $("[src=\"img/img_5.jpg\"]").addClass("active");
  }
}

// script


// get the number of the img tags present in the document
// and generate the bullets for it
// the first bullet has the classes "first" and "active"
// the last bullet has the class "last"
// all the bullets have the classes "bullet" and "bullet-i"

var qntOfImg = document.images.length;
var htmlBulletList = "";

for (var i = 0; i < qntOfImg; i++) {
  if (i == 0) {
    htmlBulletList += "<div class=\"bullet first bullet-0 active\"></div>";
  } else if (i == qntOfImg - 1) {
    htmlBulletList += "<div class=\"bullet last bullet-" + i + "\"></div>";
  } else {
    htmlBulletList += "<div class=\"bullet bullet-" + i + "\"></div>";
  }
}

document.getElementsByClassName("bullet-container")[0].innerHTML = htmlBulletList;



$("#next-button").click(nextImg);
// keyCode 39 is the right arrow
$(document).keydown(function(e){
  if (e.keyCode == 39)
  nextImg();
});


$("#prev-button").click(prevImg);
// keyCode 37 is the left arrow
$(document).keydown(function(e){
  if (e.keyCode == 37)
  prevImg();
});


$(".bullet").click(bulletSelect);
