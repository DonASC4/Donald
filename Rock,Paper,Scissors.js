//For RPS on consoles connected to web browser.

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

// var compare = function(choice1,choice2) {
//     if (choice1 === choice2) {
//         return("The result is a tie!");
//     } else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return("rock wins.");
//         } else {
//             return("paper wins")
//      if (choice1 === "paper") {
//             if (choice2 === "rock") {
//                 return("paper wins");
//             } else {
//                 return("scissors wins")
//             }
//         }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return("rock wins.");
//         } else { 
//             return("scissors wins.")
//         }
//     }
// }
// }
// };
// console.log(compare(userChoice,computerChoice));

var userChoice = "r";

var choices = ["r", "p", "S"];
var compChoice = choices[Math.floor(Math.random()*3)];

console.log("user choice: " + userChoice);
console.log("compChoice: " + compChoice);

if (userChoice == compChoice) {
    console.log("draw game");
} else if (userChoice == "r"){
    if (compChoice== "p"){
        console.log("computer wins");
    } else if (compChoice== "s"){
        console.log("human wins");
    } else {
        console.log("error! computer chose: " + compChoice)
    }
}