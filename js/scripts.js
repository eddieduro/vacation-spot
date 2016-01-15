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

	
	//hidden submit + refresh button
	$('.submit-btn').hide();
	$('.refresh-btn').hide();


	//reveal button
	$('.reveal-btn').click(function() {
		$('form').show();
		$('.reveal-btn').hide();
		//Show first question
		$($questions.get(currentQuestion)).fadeIn();

		$('#next').click(function(){
			for(var i = 1; i < 6; i ++ ) {
			$($questions.get(currentQuestion)).fadeOut(function(){
				currentQuestion += 1;
				$($questions.get(currentQuestion)).fadeIn();
			});
		}
			console.log(currentQuestion);
			
		    if (currentQuestion === 5) {
				$('refresh-btn').show();
					//refresh button
					$('.refresh-btn').click(function() {
						window.location.reload();

			});

		};	
	});

		// //Show one question at a time.
		// for(var q = 1; q < 6; q ++) {
		// 	var question = $("#question" + q ).data("value");
		// 	total += question;
		// 	alert(total);
		// }
		// console.log(total);
		// if (total === 1 ) {
		// 	$(question).each().hide();
		// }
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
		}
		
		event.preventDefault();
	});	
});