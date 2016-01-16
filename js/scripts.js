$(document).ready(function() {
	var total = 0;
	var userInput;

	//store destinations in array
	var destinationArr = ['Seoul', 'Tokyo', 'Shanghai', 'Shanghai', 'Hanoi', 'Hanoi', 'Bangkok', 'Bangkok', 'Berlin', 'Berlin', 'London', 'London', 'Dublin', 'Paris', 'Paris', 'Chernobyl'];
	//store picture css class names in array
	var destinationPic = ['seoul', 'tokyo',  'shanghai', 'shanghai', 'hanoi', 'hanoi', 'bangkok', 'bangkok', 'berlin', 'berlin', 'london', 'london', 'dublin', 'paris', 'paris', 'chernobyl'];
	//store links for each destination travel site
	var destinationLink = ['http://www.visitseoul.net/en/index.do', 'https://www.gotokyo.org/en/', 'http://www.travelandleisure.com/travel-guide/shanghai','http://www.travelandleisure.com/travel-guide/shanghai','http://www.lonelyplanet.com/vietnam/hanoi', 'http://www.lonelyplanet.com/vietnam/hanoi', 'http://www.tourismthailand.org/About-Thailand/Destination/Bangkok', 'http://www.tourismthailand.org/About-Thailand/Destination/Bangkok', 'http://www.visitberlin.de/en', 'http://www.visitberlin.de/en', 'http://www.visitlondon.com/', 'http://www.visitlondon.com/', 'http://www.visitdublin.com/home/', 'http://en.parisinfo.com/', 'http://en.parisinfo.com/', 'http://www.tourkiev.com/'];

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
		var links = (destinationLink[total]);
		
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
