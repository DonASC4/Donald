var aggronHP = 344, 
aggronNum = 306, 
aggronType = "Steel/Rock",
aggronTakedown = 90,
aggronIronTail = 100,
aggronDoubleEdge = 120,
aggronBestMove = "Double Edge",
aggronLastEvo = false,
aggronAttack = 350,
aggronSpAttack = 240,
aggronDefense = 504,
aggronSpDefense = 240,
aggronSpeed = 218;

var aggronArray = [aggronHP,aggronTakedown,aggronIronTail,aggronDoubleEdge,aggronAttack,
aggronSpAttack,
aggronDefense,
aggronSpDefense,
aggronSpeed]

var Aggron = aggronArray

var lucarioHP = 344,
lucarioNum = 448,
lucarioType = "Steel/Fighting",
lucarioExtremeSpeed = 80
lucarioDragonPulse = 85
lucarioCloseCombat = 120
lucarioBestMove = "Close Combat",
lucarioLastEvo = true,
lucarioAttack = 350,
lucarioSpAttack = 361,
lucarioDefense = 262,
lucarioSpDefense = 262,
lucarioSpeed = 306; 

var lucarioArray = [lucarioHP,lucarioExtremeSpeed,lucarioDragonPulse,lucarioCloseCombat,lucarioAttack,
lucarioSpAttack,
lucarioDefense,
lucarioSpDefense,
lucarioSpeed]

var Lucario = lucarioArray
var lucarioArray = "Lucario"
var aggronArray = "Aggron"
function pokemonCompare(pokemon1, pokemon2){
if (pokemon1[0] == pokemon2[0]){
    console.log("HP = same");
} else if (pokemon1[0] > pokemon2[0]){
    console.log("Lucario has more HP");
} else {
    console.log("Aggron has more HP");
} if (pokemon1[1]+pokemon1[2]+pokemon1[3] > pokemon2[1]+pokemon2[2]+pokemon2[3]){
    console.log("Lucario has stronger attacks");
} else if (pokemon1[1]+pokemon1[2]+pokemon1[3] < pokemon2[1]+pokemon2[2]+pokemon2[3]){
    console.log("Aggron has stronger attacks");
} else if (pokemon1[1]+pokemon1[2]+pokemon1[3] == pokemon2[1]+pokemon2[2]+pokemon2[3]){
    console.log("Attack moves strength = same");
} if (pokemon1[4]+pokemon1[5] == pokemon2[4]+pokemon2[5]){
    console.log("Overall attack rating = same");
} else if (pokemon1[4]+pokemon1[5] > pokemon2[4]+pokemon2[5]){
    console.log("Lucario has a higher overall attack rating");
} else if (pokemon1[4]+pokemon1[5] < pokemon2[4]+pokemon2[5]){
    console.log("Aggron has a higher overall attack rating");
} if (pokemon1[6]+pokemon1[7] == pokemon2[6]+pokemon2[7]){
    console.log("Overall defense rating = same");
} else if (pokemon1[6]+pokemon1[7] > pokemon2[6]+pokemon2[7]){
    console.log("Lucario has a higher overall defense rating");
} else if (pokemon2[6]+pokemon2[7] > pokemon1[6]+pokemon1[7]){
    console.log("Aggron has a higher overall defence rating");
} if (pokemon1[8] == pokemon2[8]){
    console.log("Speed = same");
} else if (pokemon1[8] > pokemon2[8]){
    console.log("Lucario is faster");
} else if (pokemon1[8] < pokemon2[8]){
    console.log("Aggron is faster");
} 
};
console.log(pokemonCompare(Lucario, Aggron));