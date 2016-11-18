$(document).ready(function() {
  $(".btn_help").click(function() {
    $(this).toggleClass("collapse").next("ul").slideToggle();
  });

  $("#btn_create_event").click(function() {
    $(".modal_event").fadeIn(200);
  });
  $(".modal_event").find(".close").click(function() {
    $(".modal_event").fadeOut(200);
  });

  $("#login").click(function() {
    $(".modal_login").fadeIn(200);
  });

  $(".modal_login").find(".close").click(function() {
    $(".modal_login").fadeOut(200);
  });

    $("#singup").click(function() {
    $(".modal_signup").fadeIn(200);
  });

  $(".modal_signup").find(".close").click(function() {
    $(".modal_signup").fadeOut(200);
  });
});