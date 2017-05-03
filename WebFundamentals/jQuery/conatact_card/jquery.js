$(document).ready(function() {
  // $('form').on('click', '#button',function() {
  //   $('.contact').append('.contact');
  //   $('.contact').append(('#first_name'.val())+''+('#last_name' .val()))
  //
  //
  // });
  $('form').submit(function() {
    var first = $('#first_name').val();
    var last = $('#last_name').val();
    var description = $('#description').val();
    var htmlString = first + "" + last;
    console.log(htmlString)
    $('contact').append('div class='
      new '> </div>');
    $(.new).append(htmlString);
    // return false;
  });
  $(.new).on('.click','.new', function(){
    $(this).toggle('#secret');
  })



});
