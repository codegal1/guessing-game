var pElOne = document.getElementById('aOne');
var pElTwo = document.getElementById('aTwo');
var pElThree = document.getElementById('aThree');
var pElFour = document.getElementById('aFour');
var pElFive = document.getElementById('aFive');
var userName = prompt('Tell me your name.');

var counter = 0;

var els = [pElOne, pElTwo, pElThree, pElFour, pElFive];

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
   '24' ];

 function game(questions, answers, els) {
    var userInput = prompt(questions).toLowerCase();
    console.log(userInput);
    if (userInput === answers) {
    els.textContent = 'You are correct.';
    } else {
    els.textContent = 'No, that is incorrect.';
     }
   }

 for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], els[i]);
}

// var userInput = prompt ("What is your name?");
// alert ("Welcome " + userInput +"!");
// while (counter < 7) {
// var response1 = prompt ("Do I have any pets?").toLowerCase();
// if (response1 === "no") {
//   alert("Correct! I do like pets though!");
//   console.log("Correct! I do like pets though!");
//   counter++;
// } else {
//   alert("Sorry! I don't have any pets...yet! ");
//   console.log ("Sorry! I don't have any pets...yet! ");
// }
// var response2 = prompt ("Is math my favorite subject?").toLowerCase();
// if (response2 === "no") {
//   alert("Sorry! Math is my favorite subject!");
//   console.log("Sorry! Math is my favorite subject!");
// } else {
//   alert("Correct! Math is awesome!");
//   console.log("Correct! Math is awesome!");
//   counter++;
// }
// var response3 = prompt ("Was I born in Croatia?").toLowerCase();
// if (response3 === "no") {
//   alert("Correct! I was born in Serbia.");
//   console.log("Correct! I was born in Serbia.");
//   counter++;
// } else {
//   alert("Actually, I was born in Serbia!");
//   console.log("Actually, I was born in Serbia!");
// }
//   alert("You've got " + counter + " out of 3 correct!");
//   break;
// }
//
// // Guess_my_number game
//
// var counter = 1;
// var userNum = parseInt(prompt("Guess my number"));
//
// while (counter < 3) {
// userNum = parseInt(prompt("Guess my number"));
//   console.log("The counter is at " + counter);
//   if(userNum === 24) {
//   alert("You got it!");
//   break;
// } else if (userNum > 24) {
//   alert("Your number was too high");
//   counter++;
//   console.log("The counter is at " + counter);
// } else {
//   alert("Your number was too low");
//   counter++;
//   console.log("The counter is at " + counter);
// }
// }
