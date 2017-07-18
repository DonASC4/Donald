// var prompt = require('prompt-sync')();
// var userChoice = prompt("Do you choose rock, paper, or scissors? ");
// var compChoice = Math.floor(Math.random()*3);
// if (compChoice == 0){
//     compChoice = "rock";
// } else if (compChoice == 1){
//     compChoice = "paper";
// } else {
//     compChoice = "scissors";
// } console.log("Computer: "+ compChoice)

// function rps(choice1, choice2){
//     if (choice1 == choice2){
//         console.log("Draw Game.");
//     }
//     if (choice1 == "rock"){
//         if (choice2 == "paper"){
//             console.log("Computer wins.");
//         } else if (choice2 == "scissors"){
//             console.log("You win!");
//         } 
//     if (choice1 == "paper"){
//             if (choice2 == "scissors"){
//                 console.log("Computer wins.");
//             } else if (choice2 == "rock"){
//                 console.log("You win!");
//             } else {
//                 console.log("error, try again later.");
//             }
//         }
//     }
// };

// rps(userChoice, compChoice);



/**
 * LOGIC
 */
//powerslaker channel rps project.
var score = 0;
var playerChoice;

var readable = {
    "0": 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
}