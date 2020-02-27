//Variables

var holder;
var arrayNumber = 0; 
var self = this;
var beginBtn = $('#beginBtn');
var img = $("#img");
var answerBtn = $(".answerBtn");
var answerSpace = $(".answerSpace");
var score = $(".score");
var sound;

var nextBtn = $('.nextBtn');


score = 0;
promptNumber = 0;


//Data Structure

var questions = [
   {
      prompt: "In what year did Apple unveil it’s rainbow apple logo? ",
      wrongAnswers: ["1975", "1977", "2002", "2020"],
      answer: "1977",
      image: "images/apple_rainbow.png"
   },

   {
      prompt: "What social media company’s original icon cost only $15?",
      wrongAnswers: ["Twitter", "Facebook", "Instagram", "MySpace"],
      answer: "Twitter. The company bought the bird’s image from iStockphoto for only $15, but the artist received about $6 from the sale.",
      image: "images/Twitter_logo.png"
   },

   {
      prompt: "What do each of the peacock feathers in NBC’s logo represent?",
      wrongAnswers: ["People, Celebrities, Television, Space, Engineering, and Color", "Personality, Virtue, Loyalty, Strength, Time, and Energy", "News, Sports, Entertainment, Stations, Network, and Productions", "Life, Time, Passion, Courage, Strength, and Money"],
      answer: "News, Sports, Entertainment, Stations, Network, and Productions",
      image: "images/NBC_logo.png"
   },

   {
      prompt: "As one of the most expensive documented logos, how much did the BP logo redesign cost?",
      wrongAnswers: ["$211,000,000", "$30,000,000", "$100", "$1,200,000,000"],
      answer: "$211,000,000",
      image: "images/BP_logo.png"
   },

   {
      prompt: "The chocolate candy Toblerone has a hidden animal in their logo. What is it?",
      wrongAnswers: ["A Rabbit", "A Turtle", "A Bear", "A Deer"],
      answer: "A Bear",
      image: "images/Toblerone_logo.png"
   },

   {
      prompt: "Before changing their name to the greek goddess of victory, Nike originally went by what name?",
      wrongAnswers: ["Athletic Assurance", "Blue Ribbon Sports", "Catch Clothing", "Blue Lightening Sports"],
      answer: "Blue Ribbon Sports",
      image: "images/Nike_logo.png"
   },

   {
      prompt: "What word do the multi-language symbols make up on the wikipedia globe?",
      wrongAnswers: ["Love", "Unity", "Knowledge", "Wikipedia"],
      answer: "Wikipedia",
      image: "images/Wikipedia_logo.png"
   },

   {
      prompt: "BMW’s colors, blue and white, represent what country?",
      wrongAnswers: ["Germany", "Italy", "Bavaria", "France"],
      answer: "Bavaria",
      image: "images/BMW_logo.png"
   },

   {
      prompt: "How many takes with separate lions were used for the MGM logo roar?",
      wrongAnswers: ["3", "7", "10", "15"],
      answer: "7",
      image: "images/MGM_logo.png"
   },

   {
      prompt: "Which typeface resource site’s logo cleverly makes out a hand so you can “Grab any font you need”?",
      wrongAnswers: ["MyFonts", "daFont", "Font Squirrel", "Creative Market"],
      answer: "MyFonts",
      image: "images/MyFonts_logo.png"
   },
]

// console.log(questions[5]);

holder = questions[arrayNumber];


beginBtn.click(function() {
   beginBtn.remove()
   $("#questionNumber").css('visibility', 'visible')
   $("#questionSpace").css('visibility', 'visible')
   displayQuestion()
   scoreTracker()
   
   // sound = new sound(audio/RightAnswerSound.mp3);
})

//DISPLAY QUESTION
function displayQuestion() {
   $('.answerBtn').show()
   $('#question').text(holder.prompt)
   $('#answer1').text(holder.wrongAnswers[0])
   $('#answer2').text(holder.wrongAnswers[1])
   $('#answer3').text(holder.wrongAnswers[2])
   $('#answer4').text(holder.wrongAnswers[3])

   

   // timerStart();
}

rightAnswer = (holder.answer);


//ACTION
answerBtn.click(function () {
   var answerBtnText = $(this).text();
   // console.log(theClass);
   // console.log(rightAnswer);
   // console.log(answerBtn);
   console.log(answerBtnText)
   console.log(rightAnswer);

   // clearInterval(timer);
   
   if (answerBtnText === rightAnswer) {
      showRightAnswer();
   }
   else {
      showWrongAnswer();
   }
});


//CHECKANSWER
function showRightAnswer() {
   console.log('right')
   // sound.play();
   $('#question').text("CORRECT!")
   $('#answer1').text(holder.answer)
   $('#answer2').hide();
   $('#answer3').hide();
   $('#answer4').hide();

   $('.nextBtn').css('visibility', 'visible')

   if (promptNumber <= 10) {
      promptNumber++;
   }
   else {
      finalSummary();
   }
   promptNumber++;
   console.log(promptNumber);

};

function showWrongAnswer() {
   console.log('wrong')
   $('#question').text("Uh Oh! You missed that one. The correct answer was" + answer)
   $('#answer1').hide();
   $('#answer2').hide();
   $('#answer3').hide();
   $('#answer4').hide();

   $('.nextBtn').css('visibility', 'visible')

   
};

//NextQuestion
nextBtn.click(function () {
   if (promptNumber <= 10) {
      promptNumber++;
      displayQuestion();
   }
   else {
      finalSummary();
   }
});

//SCORE
function scoreTracker() {
   $('score').innerHTML = 'Score:' + 0;
};



//TIMER
// function timerStart() {
//    var timer = setInterval(timer, 16000);
//    $('.time').innerHTML = timer;
// };


//FINAL SUMMARY
function finalSummary() {
   $('#question').text('Complete!')
   $('#answer1').text("Score:" + score + "points")
   
}
