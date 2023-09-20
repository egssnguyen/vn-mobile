// JavaScript Document
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("nav").css("background-color", "#850001");
    } else {
      $("nav").css("background-color", "transparent");
    }
  })
});