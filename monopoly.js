var prompt = require('prompt-sync')();
console.log("Welcome to Monopoly!");
var player1 = [];
var player2 = [];
function setup(){
var players = prompt("How many people are playing? ");
    if (players == 1){
    console.log("Sorry, you need at least 2 people to play.");
} else if (players == 2){
    var player1Choice = prompt("Choose your token, player 1: Car, Plane, Battleship. " )
} else {
    console.log("Too many, come back when one of you dies.");
} if (player1Choice == "Car"){
    player1.push("Car");
    prompt("Choose your token, player 2: Plane, Battleship. ");
} else if (player1Choice == "Plane"){
    player1.push("Plane");
    prompt("Choose your token, player 2: Car, Battleship. ");
} else if (player1Choice == "Battleship"){
    player1.push("Battleship");
    prompt("Choose your token, player 2: Car, Plane. ");
}
};
setup();

