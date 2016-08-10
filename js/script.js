$(document).ready( function() {

// on click or on hover
// when user clicks out

//html is to replace
//apend is to add puts on the bottom
//prepend puts at the top

var history = [];
var running_total = 0;

  $('#my_button').click( function() {
    var ul = $('#budget');
    running_total += parseInt($('#my_input').val());
    ul.html('$' + running_total);
    
  });


  $('#second_button').click( function () {
    var ul = $('#budget');
    // var ul = parseInt($('#budget').val());
    // var name = $('#data_name');
    // var amount = $('#data_amount');
    running_total -= parseInt($('#amount').val());
    history.push($('#name').val());
    history.push($('#amount').val());
    // name.html($('#name').val());
    // amount.html($('#amount').val());
    // ul.html($('#my_input').val() - amount);
    // $('#budget').attr('ul', 'ul' - 'amount');
    ul.html('$' + running_total);
    console.log(history);


  });






  // $(document).on('mouseenter', '#list', function() {
  //   alert('hovered');
  // });

});
