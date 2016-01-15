$(document).ready(function() {
  //store total number of questions = 5
  var totalQuestions = $('.question').size();
  //set current question
  var currentQuestion = 0;
  //Start using '$' in front of jQuery variable selectors
  $questions = $('.question');



  //Hide all the questions
  $questions.hide();

  //initially hide all the buttons
  $('.submit-btn').hide();
  $('.refresh-btn').hide();

  //reveal button
  $('.reveal-btn').click(function() {
    $('#begin-pad>h2').hide();
    $('form').show();
    $('.reveal-btn').hide();
    //Show first question
    $($questions.get(currentQuestion)).fadeIn();

    //when next btn clicked get question that is after current question that user is on
    //if the current question is less than or equal to 4 or greater than 5 run this block
    $('#next').click(function(){
      if((currentQuestion <= 4) || (currentQuestion > 5)){
        $($questions.get(currentQuestion)).fadeOut(function(){
        currentQuestion += 1;
        $($questions.get(currentQuestion)).fadeIn();
        console.log(currentQuestion);

        });
    //everything else hide the next button, show the submit button, and add in the last slide class.
        } else {
          $('.submit-btn').show();
          $('#next').hide();
          $('.last-slide').prepend('<h3>Let\'s see what you got!</h3>');
      }
    });
  });
});
