'use strict';
console.log('file working');

var userName = prompt('Please enter your name');
if (userName === 'Garrett') {
  alert('Your name is Toby, ' + userName);
} else {alert('Hello ' + userName + ' Welcome to Narnia!' + ' Do you like winter?');
}



function wrapper() {
  var ready = confirm('Are you ready');


  console.log(ready);

  if (ready === true) {
    var answeredProperly = false;
    while (answeredProperly === false) {
      var answer1 = prompt('Was I born in kentucky? yes/no');
      //console.log(answer1.toLowerCase());
      if (answer1.toLowerCase() === 'yes') {
        answeredProperly = true;
        //console.log(answer1.toLowerCase());
        alert('Correct! I was born in kentucky');
      } else if (answer1.toLowerCase() === 'no') {
        answeredProperly = true;
        //console.log(answer1.toLowerCase());
        alert('Incorrect! I was indeed born in kentucky!');
      } else {
        alert('Please pick yes or no!');

      }
    }
  }

  answeredProperly = false;
  while (answeredProperly === false) {
    var answer2 = prompt('Am I 26 years old? yes/no');
    //console.log(answer2.toLowerCase());
    if (answer2.toLowerCase() === 'yes') {
      answeredProperly = true;
      //console.log(answer2.toLowerCase());
      alert('Correct! I am 26 years old!');
    } else if (answer2.toLowerCase() === 'no') {
      answeredProperly = true;
      //console.log(answer2.toLowerCase());
      alert('Incorrect! I ackshually am 26 years old!');
    } else {
      alert('Please pick yes or no!');

    }
  }

  answeredProperly = false;
  while (answeredProperly === false) {
    var answer3 = prompt('Was I raised in Virginia? yes/no');
    //console.log(answer3.toLowerCase());
    if (answer3.toLowerCase() === 'no') {
      answeredProperly = true;
      //console.log(answer3.toLowerCase());
      alert('Correct! I was raised in Maryland');
    } else if (answer3.toLowerCase() === 'yes') {
      answeredProperly = true;
      //console.log(answer3.toLowerCase());
      alert('Incorrect! I ackshually was raised in Maryland!');
    } else {
      alert('Please pick yes or no!');

    }
  }


  answeredProperly = false;
  while (answeredProperly === false) {
    var answer4 = prompt('Am I employed as a nurses assistant?');
    //console.log(answer4.toLowerCase());
    if (answer4.toLowerCase() === 'yes') {
      answeredProperly = true;
      //console.log(answer4.toLowerCase());
      alert('exactamundo! I work as a nurses assistant!');
    } else if (answer4.toLowerCase() === 'no') {
      answeredProperly = true;
      //console.log(answer4.toLowerCase());
      alert('you so wrong! I definitely work as a nurses assistant!');
    } else {
      alert('Please pick yes or no!');

    }
  }

  answeredProperly = false;
  while (answeredProperly === false) {
    var answer5 = prompt('Is hiking one of my hobbies');
    //console.log(answer5.toLowerCase());
    if (answer5.toLowerCase() === 'yes') {
      answeredProperly = true;
      //console.log(answer5.toLowerCase());
      alert('Awesome job! It is totally my favorite hobby, I love the woods!');
    } else if (answer5.toLowerCase() === 'no') {
      answeredProperly = true;
      //console.log(answer5.toLowerCase());
      alert('No no no no no no no! Hiking is like my favorite thing ever!');
    } else {
      alert('Please pick yes or no!');

    }
  }
}
wrapper();



var correctNumber = 5;

for (var remainingGuess = 4; remainingGuess > 0; remainingGuess--){
  var answer6 = parseInt(prompt('Guess a number 1-10 Good luck!'));
  if (answer6 === correctNumber) {
    alert('Amazing!');
    break;
  } else if (answer6 < correctNumber) {
    alert('Too low!');
  }
  else if (answer6 > correctNumber) {
    alert('Too high!');
  }
}
if (remainingGuess === 0){
  alert('you only get 4 tries 75 bucks for more');
  alert('The correct answer was 5!');
}


var arrayAnswers1 = ['hiking', 'sportsball', 'gardening', 'drinking alcohol', 'eating', 'shooting', 'harassing passersby', 'video games', 'driving too fast'];
var answerCorrect = arrayAnswers1[0];
for (var answerRemain = 0; answerRemain < 6; answerRemain++) {
  var answer7 = prompt('Which hobby is my favorite? hiking, sportsball, gardening, drinking alcohol, eating, shooting, harassing passersby, video games, driving too fast');
  if (answer7.toLowerCase() === answerCorrect) {
    alert('You got it!');
    break;
  }
  else if (answer7.toLowerCase !== answerCorrect) {
    alert('Incorrect!');
  }
  if (answerRemain === 5){
    alert('you only get 6 tries');
    alert('The correct answer was hiking!');
  }
}

