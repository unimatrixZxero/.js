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