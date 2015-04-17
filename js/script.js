"use strict";
var carousel;

window.onload = function() {
  return setInterval(function() {
    carousel();
  }, 5000);
};

carousel = function() {
  var i, len, slide, slider, slides;
  slider = document.getElementById("slider");
  slides = slider.getElementsByTagName("img");
  for (i = 0, len = slides.length; i < len; i++) {
    slide = slides[i];
    if (slide.className == "active") {
      slide.className = "";
      slides[i+1].className = "active";
    } else {

    }
  }
};
