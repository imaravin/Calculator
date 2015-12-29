$(document).ready(function () {
	$('.btn').click(function(event){
		if($(this).html()==='=')
			$('.jumbotron').text(cal($('.jumbotron').html()))
		else
		$('.jumbotron').text($('.jumbotron').html()+$(this).html());
	});
});
function cal(x)
{
	var str=String(x);
	var arr=str.split("+");
	if (arr.length==2)
	return parseFloat(arr[0])+parseFloat(arr[1]);
	else
		return "a";
}