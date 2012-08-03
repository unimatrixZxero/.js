var my_name = 'Sam Figueroa'
$('#time-report tbody td').each(function() {
  if (this.innerHTML.match(my_name)) {
    console.log(this.innerHTML);
    $(this).parent().css({
      background: 'yellow'
    });
  }
});