$(document).ready(function() {
  $("#clicker").click(function() {
    $("#water").text("hello world!");
  });

  $('#seek').click(function() {
    $(".para").hide(2000);
  });

  $("#show").click(function() {
    $(".show span").show();
  });

  $(".toggle").click(function() {
    $(".newp").toggle(100);
  });

  $("#down").click(function() {
    $(".list").slideDown(1000);
  });

  $("#up").click(function() {
    $(".slideUp p").slideUp();
  });

  $(".slidetoggle button").click(function() {
    $(".slidetoggle p").slideToggle();
  });
  $(".in button").click(function() {
    $(".in span").fadeIn(30000);
  });
  $(".out button").click(function() {
    $(".out p").fadeOut(3000);
  });
});
