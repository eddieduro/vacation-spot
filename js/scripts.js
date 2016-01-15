$(document).ready(function() {
	var total = 0;
	var userInput;
	var destinationArr = ['Seoul', 'Tokyo', 'Berlin', 'Berlin', 'London', 'London', 'Dublin', 'Hanoi', 'Hanoi', 'Bangkok', 'Bangkok', 'Shanghai', 'Shanghai','Paris', 'Paris', 'Moscow'];
	var destinationPic = ['seoul', 'tokyo', 'berlin', 'berlin', 'london', 'london', 'dublin', 'hanoi', 'hanoi', 'bangkok', 'bangkok', 'shanghai', 'shanghai','paris', 'paris', 'moscow'];

	$("form").submit(function(event) {
		for(var i = 1; i < 6; i ++) {
			var userInput = $("input[name=radios" + i + "]:checked").val();
			userInput = parseInt(userInput);
			total += userInput;
		}
		var destinations = (destinationArr[total]);
		var pictures = (destinationPic[total]);
		$("h1").text(destinations).prepend("<h4>Your next destination is :</h4>");
		$("div.hero").addClass(pictures);
		event.preventDefault();
	});
	$('.refresh-btn').click(function() {
		window.location.reload();
	});
});