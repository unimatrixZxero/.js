console.log('tumblr dot.js loaded');


$('#container').append("<div style='clear:both'><a href='#' id='fuck_yeah'>fuck yeah</a></div>");

$('#fuck_yeah').click(function(){
  $('#channel_id').val('fuckyeahfigueroa');
  $('#photo_form_channel_id').val('fuckyeahfigueroa');
  $('#post_state').val(2);
  $('#photo_form_post_state').val(2);
  $('#photo_post_two').val('');
  $('#photo_post_two').remove();
});

