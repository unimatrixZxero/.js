$(function(){

	if(document.location.pathname == '/b/0/IssuedAuthSubTokens'){
		$('head').append($('<link/>').attr({href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.1/css/bootstrap.css', rel: 'stylesheet'}));
		$('#acList').addClass('table table-hover table-striped');
		$('ul').hide();
		var showHideToggle = $('<a/>').addClass('btn btn-success').text('Toggle list');
		showHideToggle.appendTo($('h3').first());
		showHideToggle.click(function(){
			$('ul').first().toggle();
		});

		$('input[type=submit]').addClass('btn');

		$('hr').first().nextUntil('fieldset').remove();
		$('fieldset').css('margin-top', '-20px');
		$('.body').css('color', 'white');
		$('.body').children().css('color', 'black');
	}
});