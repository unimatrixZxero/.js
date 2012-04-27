console.log('Soundcloug dot.js script loaded');

function toggle_soundcloud_comments(){
  $('.comments-toggle').each(function(){
    $(this).trigger('click');
  });
  $('.player div.medium').addClass('no-comments');
  $('.timestamped-comments ').hide();
  console.log('toggle away comment thes');
}

setTimeout(function(){
  toggle_soundcloud_comments();
}, 3000);
