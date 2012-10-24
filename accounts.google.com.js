$(function(){

	if(document.location.pathname.match(/IssuedAuthSubTokens/)){
		$('head').append($('<link/>').attr({href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.1/css/bootstrap.css', rel: 'stylesheet'}));
		
		// Nicefy table
		$('#acList').addClass('table table-hover table-striped table-condensed');
		$('a', '#acList').addClass('btn btn-danger');
		$('a', '#acList').closest('td').each(function(){
			$this = $(this);
			$this.html($this.html().replace(/\[|\]/g, ''));
		});

		// Hide and toggle list of connected services
		$('ul').hide();
		var showHideToggle = $('<a/>').addClass('btn').text('Toggle list');
		showHideToggle.appendTo($('h3').first().next());
		showHideToggle.click(function(){
			$('ul').first().toggle();
		});

		// Make page nicer
		$('input[type=submit]').addClass('btn');

		// I no longer need an explanation what I'm doing! Let's get rid of it.
		$('hr').first().nextUntil('fieldset').remove();
		$('fieldset').css('margin-top', '-20px');
		$('.body').css('color', 'white');
		$('.body').children().css('color', 'black');
	}
});