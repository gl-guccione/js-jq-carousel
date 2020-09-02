
function nextImg() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  if (imgActive.hasClass("last")) {
    $("img.first").addClass("active");
  } else {
    imgActive.next().addClass("active");
  }
}

function prevImg() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  if (imgActive.hasClass("first")) {
    $("img.last").addClass("active");
  } else {
    imgActive.prev().addClass("active");
  }
}


$("#next-button").click(nextImg);
$(document).keydown(function(e){
  if (e.keyCode == 39)
  nextImg();
});


$("#prev-button").click(prevImg);
$(document).keydown(function(e){
  if (e.keyCode == 37)
  prevImg();
});
