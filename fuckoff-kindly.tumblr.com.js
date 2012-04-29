console.log('Script fuckoff-kindly loaded.');
$(document).ready(function(){	
	setTimeout(function() {
		document.ondragstart = function(){return true;}
		$('.box a')[0].href  = $('div.box a img')[0].src		
	}, 1000);	
})

