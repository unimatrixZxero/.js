$('#time-report tbody tr').click(function() {
  $(this).toggleClass('total');
});

var my_name = 'Sam Figueroa'

$('#time-report tbody td').each(function() {
  if (this.innerHTML.match(my_name)) {
    $(this).parent().css({
      background: 'yellow'
    });
  }
});

$('body').css('font-family', 'Helvetica Neue')

$('#header').css('background-color','#C6015D')


if ($('#time_entry_issue_id').length > 0) {
  $('#time_entry_issue_id').focus();
}
