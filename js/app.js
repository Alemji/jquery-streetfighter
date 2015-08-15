$(document).ready(function() {
	$('.ryu').mouseenter(function() { 
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		
	})

	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({left: '1020px'}, 500,
		function() {
			$(this).hide();
			$(this).css('left', '520px');
			}) /* this anonymous function will be called at the completion
		of the animation to reset the hadouken.*/
		//play hadouken sound
	})

	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.ryu-still').hide();
		//ryu goes back to his ready position
	})


	$('body').keydown(function(e){
		if(e.keyCode == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('ryu-throwing').hide();
			$('.ryu-cool').show()}
		}) 

	$('body').keyup(function(e){
		if(e.keyCode == 88){
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').show();}
		}) // I don't understand why some functions need something in ()...
	
	$('.how-to')//.css('left','300px').css('top', '150px');
	
	
});

function playHadouken () {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}







/*alert('mouse entered .ryu div')*/
		/* use the alert to check that the event is firing*/
	