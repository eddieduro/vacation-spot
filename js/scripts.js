$(document).ready(function() {
	var total = 0;
	var userInput;
	var destinationArr = ['Seoul', 'Tokyo', 'Berlin', 'Berlin', 'London', 'London', 'Dublin', 'Hanoi', 'Hanoi', 'Bangkok', 'Bangkok', 'Shanghai', 'Shanghai','Paris', 'Paris', 'Moscow'];
	$("form").submit(function(event) {
		for(var i = 1; i < 6; i++) {
			var userInput = $("input[name=radios" + i + "]:checked").val();
			console.log(userInput)
		}
	});
});