var pElOne = document.getElementById('aOne');
var pElTwo = document.getElementById('aTwo');
var pElThree = document.getElementById('aThree');
var pElFour = document.getElementById('aFour');
var pElFive = document.getElementById('aFive');
var imageOne = document.getElementById('imgOne');
var imageTwo = document.getElementById('imgTwo');
var imageThree = document.getElementById('imgThree');
var imageFour = document.getElementById('imgFour');
var imageFive = document.getElementById('imgFive');

var userName = prompt('Tell me your name.');


var counter = 3;

var els = [pElOne, pElTwo, pElThree, pElFour, pElFive];
var imgArray = [imageOne, imageTwo, imageThree, imageFour, imageFive];

var questions = [
  'Do I have any pets?',
  'Is math my favorite subject?',
  'Was I born in Croatia?',
  'Do I have any siblings?',
  'What number am I thinking of?'
 ];

var answers = [
  'no',
  'yes',
  'no',
  'no',
   24 ];

function game(questions, answers, els, image) {
  var userInput = prompt(questions).toLowerCase();
  console.log(userInput);
  if (isNaN(parseInt(userInput))) {
    if (userInput === answers) {

       els.textContent = 'You are correct.'
       els.className = ('correct');
       image.src = 'http://www.amazingpestcontrol.com/images/correct.jpg';
  } else {
       els.textContent = 'No, that is incorrect.'
       els.className = ('incorrect');
       image.src = 'https://tse4.mm.bing.net/th?id=OIP.M9e0a5255c514a45035ce02c8d54dc84bo0&pid=15.1';
    }
  } else {
    if (typeof answers === 'number') {
      console.log('if');
      userInput = parseInt(userInput);
      while (userInput !== answers) {
        console.log('while');
        if (counter === 0) {
          break;
        } else {
          if (isNaN(userInput)) {
            userInput = parseInt(prompt('Try guessing again.'));
            counter--;
            console.log('userInput');
          } else if (userInput > answers) {
            userInput = parseInt(prompt('Too high, guess again.'));
            counter--;
            console.log('userInput');
          } else {
            userInput = parseInt(prompt('Too low, guess again.'));
            counter--;
            console.log('userInput');
          }
        }
      }
      els.textContent = 'Correct!';
      els.className = ('correct');
      image.src = 'http://www.amazingpestcontrol.com/images/correct.jpg';
    }
  }
}

 for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], els[i], imgArray[i]);
 }
