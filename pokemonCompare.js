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

var aggronArray = ["Aggron",[aggronHP,aggronTakedown,aggronIronTail,aggronDoubleEdge,aggronAttack,
aggronSpAttack,
aggronDefense,
aggronSpDefense,
aggronSpeed]];

var Aggron = aggronArray;

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

var lucarioArray = ["Lucario",[lucarioHP,lucarioExtremeSpeed,lucarioDragonPulse,lucarioCloseCombat,lucarioAttack,
lucarioSpAttack,
lucarioDefense,
lucarioSpDefense,
lucarioSpeed]];

var Lucario = lucarioArray; 

var alakazamHP = 314,
alakazamNum = 65,
alakazamType = "Psychic",
alakazamPsybeam = 100
alakazamKinesis = 80
alakazamFutureSight = 100
alakazamBestMove = "Future Sight",
alakazamastEvo = true,
alakazamAttack = 218,
alakazamSpAttack = 405,
alakazamDefense = 207,
alakazamSpDefense = 317,
alakazamSpeed = 372;

var alakazamArray = ["Alakazam",[alakazamHP,alakazamPsybeam,alakazamKinesis,alakazamFutureSight,alakazamAttack,
alakazamSpAttack,
alakazamDefense,
alakazamSpDefense,
alakazamSpeed]];

var Alakazam = alakazamArray;

var garchompHP = 414,
garchompNum = 445,
garchompType = "Dragon/Ground",
garchompDragonClaw = 80
garchompTakedown = 90
garchompDragonRush = 100
garchompBestMove = "Dragon Rush",
garchompLastEvo = true,
garchompAttack = 394,
garchompSpAttack = 294,
garchompDefense = 317,
garchompSpDefense = 295,
garchompSpeed = 333;

var garchompArray = ["Garchomp",[garchompHP,garchompDragonClaw,garchompTakedown,garchompDragonRush,garchompAttack,
garchompSpAttack,
garchompDefense,
garchompSpDefense,
garchompSpeed]];

var Garchomp = garchompArray

var rayquazaHP = 414,
rayquazaNum = 249,
rayquazaType = "Dragon/Flying",
rayquazaHyperVoice = 90
rayquazaOutrage = 120
rayquazaHyperBeam = 150
rayquazaBestMove = "Hyper Beam",
rayquazaLastEvo = true,
rayquazaAttack = 438,
rayquazaSpAttack = 438,
rayquazaDefense = 306,
rayquazaSpDefense = 306,
rayquazaSpeed = 317;

var rayquazaArray = ["Rayquaza",[rayquazaHP,rayquazaHyperVoice,rayquazaOutrage,rayquazaHyperBeam,rayquazaAttack,
rayquazaSpAttack,
rayquazaDefense,
rayquazaSpDefense,
rayquazaSpeed]];

var Rayquaza = rayquazaArray

var lugiaHP = 416,
lugiaNum = 249,
lugiaType = "Psychic/Flying",
lugiaHydroPump = 110
lugiaFutureSight = 120
lugiaSkyAttack = 140
lugiaBestMove = "Sky Attack",
lugiaLastEvo = true,
lugiaAttack = 306,
lugiaSpAttack = 306,
lugiaDefense = 394,
lugiaSpDefense = 447,
lugiaSpeed = 350;

var lugiaArray = ["Lugia",[lugiaHP,lugiaHydroPump,lugiaFutureSight,lugiaSkyAttack,lugiaAttack,
lugiaSpAttack,
lugiaDefense,
lugiaSpDefense,
lugiaSpeed]];

var Lugia = lugiaArray

function pokemonCompare(pokemon1, pokemon2){
if (pokemon1[1][0] == pokemon2[1][0]){
    console.log("HP = same");
} else if (pokemon1[1][0] > pokemon2[1][0]){
    console.log(pokemon1[0]+" has more HP");
} else if (pokemon1[1][0] < pokemon2[1][0]){
    console.log(pokemon2[0]+" has more HP");
} if (pokemon1[1][1]+pokemon1[1][2]+pokemon1[1][3] > pokemon2[1][1]+pokemon2[1][2]+pokemon2[1][3]){
    console.log(pokemon1[0]+" has stronger attacks");
} else if (pokemon1[1][1]+pokemon1[1][2]+pokemon1[1][3] < pokemon2[1][1]+pokemon2[1][2]+pokemon2[1][3]){
    console.log(pokemon2[0]+" has stronger attacks");
} else if (pokemon1[1][1]+pokemon1[1][2]+pokemon1[1][3] == pokemon2[1][1]+pokemon2[1][2]+pokemon2[1][3]){
    console.log("Attack moves strength = same");
} if (pokemon1[1][4]+pokemon1[1][5] == pokemon2[1][4]+pokemon2[1][5]){
    console.log("Overall attack rating = same");
} else if (pokemon1[1][4]+pokemon1[1][5] > pokemon2[1][4]+pokemon2[1][5]){
    console.log(pokemon1[0]+" has a higher overall attack rating");
} else if (pokemon1[1][4]+pokemon1[1][5] < pokemon2[1][4]+pokemon2[1][5]){
    console.log(pokemon2[0]+" has a higher overall attack rating");
} if (pokemon1[1][6]+pokemon1[1][7] == pokemon2[1][6]+pokemon2[1][7]){
    console.log("Overall defense rating = same");
} else if (pokemon1[1][6]+pokemon1[1][7] > pokemon2[1][6]+pokemon2[1][7]){
    console.log(pokemon1[0]+" has a higher overall defense rating");
} else if (pokemon2[1][6]+pokemon2[1][7] > pokemon1[1][6]+pokemon1[1][7]){
    console.log(pokemon2[0]+" has a higher overall defence rating");
} if (pokemon1[1][8] == pokemon2[1][8]){
    console.log("Speed = same");
} else if (pokemon1[1][8] > pokemon2[1][8]){
    console.log(pokemon1[0]+" is faster");
} else if (pokemon1[1][8] < pokemon2[1][8]){
    console.log(pokemon2[0]+" is faster");
} 
};
console.log(pokemonCompare(Rayquaza,Lugia));