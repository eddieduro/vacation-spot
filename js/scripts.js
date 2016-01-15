$(document).ready(function() {
	var total = 0;
	var userInput;

	//store destinations in array
	var destinationArr = ['Seoul', 'Tokyo', 'Berlin', 'Berlin', 'London', 'London', 'Dublin', 'Hanoi', 'Hanoi', 'Bangkok', 'Bangkok', 'Shanghai', 'Shanghai','Paris', 'Paris', 'Moscow'];
	//store picture css class names in array
	var destinationPic = ['seoul', 'tokyo', 'berlin', 'berlin', 'london', 'london', 'dublin', 'hanoi', 'hanoi', 'bangkok', 'bangkok', 'shanghai', 'shanghai','paris', 'paris', 'moscow'];


	//Section that reveals your destination
	$("form").submit(function(event) {
		for(var i = 1; i < 6; i ++) {
			var userInput = $("input[name=radios" + i + "]:checked").val();
			userInput = parseInt(userInput);
			total += userInput;
		}

		//set variables equal to array with index of [total] from loop above
		var destinations = (destinationArr[total]);
		var pictures = (destinationPic[total]);

		if ($("h1").text(destinations).prepend("<h4>Your next destination is :</h4>")) {
			$("div.hero").addClass(pictures);
			$("div.hero > div").removeClass("gif-hero");
			$('#next').hide();
			$('.submit-btn').hide();
		}
			//refresh show after if statement runs
			$('.refresh-btn').show();
			//refresh button
			$('.refresh-btn').click(function() {
				window.location.reload();

			});

		event.preventDefault();
	});
	//submit button hides let's see what you got when pressed.
	$('.submit-btn').click(function(){
		$(".last-slide").hide();
	});
});
