var error=false;
var ans=false;

$(document).ready(function () {
	$('.btn').click(function(event){

		if(ans)
		{
			$('.jumbotron').text('');
			ans=false;
		}
		
		if(error){
			$('.jumbotron').text($(this).html());
			error=false;
		}
		else if($(this).html()==='='){
			$('.jumbotron').text(cal($('.jumbotron').html()))
			ans=true;
		}
		else
		$('.jumbotron').text($('.jumbotron').html()+$(this).html());
	});
});
function cal(x)
{
	ans=true;
	var str=String(x);
	var arr=str.split("+");
	if (arr.length==2)
	return parseFloat(arr[0])+parseFloat(arr[1]);

	arr=str.split("-");
		if (arr.length==2)
			return parseFloat(arr[0])-parseFloat(arr[1]);

   arr=str.split("*");
		if (arr.length==2)
			return parseFloat(arr[0])*parseFloat(arr[1]);
	 arr=str.split("/");
		if (arr.length==2)
		return parseFloat(arr[0])/parseFloat(arr[1]);

	return "Error"
}