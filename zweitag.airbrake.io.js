$('#notices th:nth-of-type(2)').append('<span id="toggle-message" >... (Show full message)</span>');

$('#toggle-message').click(function(){
  $('#notices .message a').each(function(i,e){
    $(e).html($(e).attr('title'));
  });
});