'use strict';
console.log('file working');

var userName = prompt('Please enter your name');
if (userName === 'Garrett') {
  alert('Your name is Toby, ' + userName);
} else {alert('Hello ' + userName + ' Welcome to Narnia!' + ' Do you like winter?');
}

var ready = confirm('Are you ready');


console.log(ready);

if (ready === true) {
  var answeredProperly = false;
  while (answeredProperly === false) {
    var answer1 = prompt('Was I born in kentucky? yes/no');
    console.log(answer1.toLowerCase());
    if (answer1.toLowerCase() === 'yes') {
      answeredProperly = true;
      alert('Correct! I was born in kentucky');
    } else if (answer1.toLowerCase() === 'no') {
      answeredProperly = true;
      alert('Incorrect! I was indeed born in kentucky!');
    } else {
      alert('Please pick yes or no!');

    }
  }
}


var answer2 = prompt('Am I 26 years old? yes/no');
console.log(answer2.toLowerCase());
if (answer2.toLowerCase() === 'yes') {
  alert('Correct! I am 26 years old!');
} else if (answer2.toLowerCase() === 'no') {
  alert('Incorrect! I ackshually am 26 years old!');
} else {
  alert('Please pick yes or no!');
}



var answer3 = prompt('Was I raised in Virginia? yes/no');
console.log(answer3.toLowerCase());
if (answer3.toLowerCase() === 'no') {
  alert('Correct! I was raised in Maryland');
} else if (answer3.toLowerCase() === 'yes') {
  alert('Incorrect! I ackshually was raised in Maryland!');
} else {
  alert('Please pick yes or no!');
}


var answer4 = prompt('Am I employed as a nursing assistant?');
console.log(answer4.toLowerCase());
if (answer4.toLowerCase() === 'yes') {
  alert('Correctamundo! I am employed as a nursing assistant!!');
} else if (answer4.toLowerCase() === 'no') {
  alert('You so wrong! I am employed as a nursing assistant!');
} else {
  alert('Please pick yes or no!');
}


var answer5 = prompt('Is hiking one of my hobbies?');
console.log(answer5.toLowerCase());
if (answer5.toLowerCase() === 'yes') {
  alert('Awesome job! It is totally my favorite hobby, I love the woods!');
} else if (answer5.toLowerCase() === 'no') {
  alert('No no no no no no no! Hiking is like my favorite thing ever!');
} else {
  alert('Please pick yes or no!');
}
