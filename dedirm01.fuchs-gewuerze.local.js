$('#time-report tbody tr').click(function() {
  $(this).toggleClass('total');
});


// Highlight the row for my name in reports
var my_name = 'Sam Figueroa'
$('#time-report tbody td').each(function() {
  if (this.innerHTML.match(my_name)) {
    $(this).parent().css({
      background: 'yellow'
    });
  }
});

$('body').css('font-family', 'Helvetica Neue')

// Ooh, magenta baby!
$('#header').css('background-color','#C6015D')


// focus on first field automatically
if ($('#time_entry_issue_id').length > 0) {
  $('#time_entry_issue_id').focus();
}

// Set default activity to development
if($('#time_entry_activity_id').length > 0) {
  $('#time_entry_activity_id').val(9)
}