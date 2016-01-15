$(document).ready(function() {
	var total = 0;
	var userInput;
	var destinationArr = ['Seoul', 'Tokyo', 'Berlin', 'Berlin', 'London', 'London', 'Dublin', 'Hanoi', 'Hanoi', 'Bangkok', 'Bangkok', 'Shanghai', 'Shanghai','Paris', 'Paris', 'Moscow'];

	$("form").submit(function(event) {
		for(var i = 1; i < 6; i ++) {
			var userInput = $("input[name=radios" + i + "]:checked").val();
			userInput = parseInt(userInput);
			total += userInput;
		} if (!userInput){
			alert("hey");
		}
		var destinations = (destinationArr[total]);
		$("h1").text(destinations).prepend("<h4>Your next destination is :</h4>");
		event.preventDefault();
	});
	$('.refresh-btn').click(function() {
		window.location.reload();
	});
});