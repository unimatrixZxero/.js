$('#blueBar').css('background-color','#2D2D2D');

$('body').css('font-family', 'Helvetica Neue');

document.getElementById('pageLogo').innerHTML = '4 TEH LULz';


function hide_adds(){
  $('.UIStandardFrame_SidebarAds').hide();
  $('.ego_section').hide();
}
setInterval(function() {hide_adds()}, 3000);