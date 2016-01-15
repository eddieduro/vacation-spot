$(document).ready(function() {
	var total = 0;
	var userInput;

	//store destinations in array
	var destinationArr = ['Seoul', 'Tokyo', 'Berlin', 'Berlin', 'London', 'London', 'Dublin', 'Hanoi', 'Hanoi', 'Bangkok', 'Bangkok', 'Shanghai', 'Shanghai','Paris', 'Paris', 'Moscow'];
	//store picture css class names in array
	var destinationPic = ['seoul', 'tokyo', 'berlin', 'berlin', 'london', 'london', 'dublin', 'hanoi', 'hanoi', 'bangkok', 'bangkok', 'shanghai', 'shanghai','paris', 'paris', 'moscow'];
	//store total number of questions = 5
	var totalQuestions = $('.question').size();
	//set current question
	var currentQuestion = 0;
	$questions = $('.question');



	//Hide all the questions
	$questions.hide();

	$('.submit-btn').hide();
	$('.refresh-btn').hide();
	
	//reveal button
	$('.reveal-btn').click(function() {
		$('form').show();
		$('.reveal-btn').hide();
		//Show first question
		$($questions.get(currentQuestion)).fadeIn();

		$('#next').click(function(){
			if((currentQuestion <= 4) || (currentQuestion > 5)){
				$($questions.get(currentQuestion)).fadeOut(function(){
				currentQuestion += 1;
				$($questions.get(currentQuestion)).fadeIn();
				console.log(currentQuestion);
				
		    });
		    
		    } else {
		    	$('.submit-btn').show();
		    	$('#next').hide();	
		    	$('.refresh-btn').show();
		    	$('.last-slide').prepend('<h3>Let\'s see what you got!</h3>');
			}
		});	
	});

	//Section that reveals your destination
	$("form").submit(function(event) {
		for(var i = 1; i < 6; i ++) {
			var userInput = $("input[name=radios" + i + "]:checked").val();
			userInput = parseInt(userInput);
			total += userInput;
		}
		var destinations = (destinationArr[total]);
		var pictures = (destinationPic[total]);

		if ($("h1").text(destinations).prepend("<h4>Your next destination is :</h4>")) {
			$("div.hero").addClass(pictures);
			$("div.hero > div").removeClass("jumbotron");
			$('#next').hide();
			$('.submit-btn').hide();
		}
		$('.refresh-btn').show();
			//refresh button
			$('.refresh-btn').click(function() {
				window.location.reload();

			});
		event.preventDefault();
	});	
});