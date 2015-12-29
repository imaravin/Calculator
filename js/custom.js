$(document).ready(function () {
	$('.btn').click(function(event){
		if($(this).html()==='=')
			$('.jumbotron').text(cal($('.jumbotron').html))
		else
		$('.jumbotron').text($('.jumbotron').html()+$(this).html());
	});
});
function cal(x)
{
	return "aaa"
}