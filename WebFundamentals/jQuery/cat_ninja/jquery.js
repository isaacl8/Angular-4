$(document).ready(function() {
  $('.kitty img').click(function() {
    var x = $(this).attr('src');
    var y = $(this).attr('data-alt-src');
    $(this).attr('src',y);
    $(this).attr('data-alt-src', x);
  });

});
