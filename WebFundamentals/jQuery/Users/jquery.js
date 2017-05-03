$(document).ready(function() {

  $(document).on('click', 'button', function() {
    console.log($('#first').val())
    //.val() only works with inputs in jquery.
    var appendStr = ""
    appendStr += "<tr><td>" + $('#first').val() + "</td></tr>"
    $('table .first').append(appendStr)
  });

  $(document).on('click', 'button', function() {
    console.log($('#last').val())

    var appendStr = ""
    appendStr += "<tr><td>" + $('#last').val() + "</td></tr>"
    $('table .last').append(appendStr)
  });

  $(document).on('click', 'button', function() {
    console.log($('#email').val())

    var appendStr = ""
    appendStr += "<tr><td>" + $('#email').val() + "</td></tr>"
    $('table .email').append(appendStr)
  });

  $(document).on('click', 'button', function() {
    console.log($('#contact').val())

    var appendStr = ""
    appendStr += "<tr><td>" + $('#contact').val() + "</td></tr>"
    $('table .contact').append(appendStr)
  });

});
