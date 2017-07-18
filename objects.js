// var charizard = {
//     "atk": "Flare Blitz",
//     "atk points": 120,
//     "HP": 360, 
//     "legendary": false,
//     "type": ["Fire","Flying"]
// };

// var Aggron = {
//     "atk": "Double Edge",
//     "atk points": 120,
//     "legendary": false,
//     "type": ["Steel","Rock"]
// };

function Superhero(realName,power,deadRels){
    this.secretIdentity = realName;
    this.power = power;
    this.deadReals = deadRels;
};

var Batman = new Superhero("Bruce Wayne","$$$",2);
var Superman = new Superhero("Kal-el","Being Mad OP",2);
var Spiderman = new Superhero("Peter Parker","Spider Stuff",3);

console.log(Batman), 
console.log(Spiderman), 
console.log(Superman);




// var prompt = require('prompt-sync')();

// function pokemonBattle(){
// var choose = prompt("CHOOSE YOUR POKEMON! Aggron, Charizard");
// var playerPokemon = "";
// if (choose == "Aggron"){
//     playerPokemon = Aggron;
// } else  if (choose == Charizard){
//     playerPokemon = Charizard
// } else {
//     console.log("error, pokemon not found.")
// } 
// var choose2 = prompt("Who will your pokemon fight?");
// if (choose2)
