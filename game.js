var buttonColors = ["red" , "blue" , "green" , "yellow"];
var gamePattern = [];
var randomChoosenColor;
var userClickedPattern = [];
var level = 1;
var currentLevel = 0;
var started = 0;

function nextSequence(){

  var randomNumber = Math.floor(Math.random()*4);

  $("h1").text("Level "+level);

  //Fill the randomChoosenColor variable with the randomNumber

  randomChoosenColor = buttonColors[randomNumber];

  //Here I add the game pattern as by its order
  gamePattern.push(randomChoosenColor);

  //Show button press animation
  buttonPressAnimation(randomChoosenColor);

  //For cross check Purpose

  // console.log(randomNumber);
  // console.log(buttonColors);
  // console.log(randomChoosenColor);
  console.log("Game Pattern: "+gamePattern);
}

//Is used to get the user input Pattern
$(".btn").click(function (){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    buttonPressAnimation(userChosenColor);

    checkAnswer();
});


//Following function helps to animate the buttonColors
function buttonPressAnimation(buttonId){
  $("#"+buttonId).addClass("pressed");
  setTimeout(function () {
    $("#"+buttonId).removeClass("pressed");
  }, 100);
}

$(window).keypress(function() {

    if(started===0)
    {
      nextSequence();
      started = 1;
    }
});

function gameOverAnimation(){
   $('h1').text("Game Over, Press Any Key to Restart");
   $('body').addClass('game-over');
   setTimeout(function(){
     $('body').removeClass('game-over')
   },200);
}

function checkAnswer(){

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    console.log("Game Pattern is "+gamePattern[currentLevel]+" and userClickedPattern is "+userClickedPattern[currentLevel]);
    console.log("Patterns are matched");
    if(currentLevel === (level-1))
    {
      setTimeout(nextSequence , 1000);
      userClickedPattern = [];

      console.log("<---------------------Level "+level+" Completed---------------------------->");
      level++;
      userClickedPattern = [];
      currentLevel = 0;

      // nextSequence();
    }
    else{
      console.log("Click next color pattern");
      currentLevel++;
    }
  }
  else{
    console.log("Game Pattern is "+gamePattern[currentLevel]+" userClickedPattern is "+userClickedPattern[currentLevel]);
    gamePattern = [];
    userClickedPattern = [];
    gameOverAnimation();
    level = 1;
    started = 0;
    currentLevel = 0;
    console.log("Pattern Not matched \nGamePattern and UserClickedPattern become reseted");
    console.log("<-------------------Your Game Over------------------>");
  }
}
