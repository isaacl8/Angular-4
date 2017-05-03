$(document).ready(function(){
  $("#pictures img").click(function(){
    $(this).hide(100);
  });
    $("button").click(function(){
      $("img").toggle(100);
      $("#pictures img").show();

  });

  });
