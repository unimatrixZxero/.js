// the sex is on fire
$(window).ready(function(){
  var img = $('img.the_photo')[0];
  var img_link = document.createElement('a');
  img_link.innerHTML = "Open image in new tab";
  img_link.target = 'new_tab';
  img_link.href = img.src;
  img_link.id = 'img_link'
  $(img_link).css({padding: '10px', backgroundColor: 'grey', color: 'white', margin: '10px', position: 'absolute', top: 0, left: 0, width: '50px', zIndex: '1010101'});
  $('body').append(img_link)
  $('#img_link').trigger('click');
});