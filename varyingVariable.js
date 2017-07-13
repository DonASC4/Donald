// var Aggron = function(){
//     return(myArray);
// };  
    var aggronHP = 344, 
aggronNum = 306, 
aggronType = "Steel/Rock",
aggronRockSlide = 90,
aggronDoubleEdge = 100,
aggronMetalBurst = 100,
aggronBestMove = "Metal Burst",
aggronLastEvo = false,
aggronAttack = 350,
aggronSpAttack = 240,
aggronDefense = 504,
aggronSpDefense = 240,
aggronSpeed = 218;

var lucarioHP = 344,
lucarioNum = 448,
lucarioType = "Steel/Fighting",
lucarioPowerUpPunch = 100
lucarioBoneRush = 90
lucarioCloseCombat = 100
lucarioBestMove = "Close Combat",
lucarioLastEvo = true,
lucarioAttack = 350,
lucarioSpAttack = 361,
lucarioDefense = 262,
lucarioSpDefense = 262,
lucarioSpeed = 306; 

var myArray = ["HP: " +aggronHP, "National #: " +aggronNum, "Type: " +aggronType,"RockSlide move damage: " +aggronRockSlide,
"DoubleEdge move damage: " +aggronDoubleEdge,
"Metal Burst move damage: " +aggronMetalBurst,
"Best Move: " +aggronBestMove,
"Is this its last evolution?: " +aggronLastEvo,
"Attack(max): " +aggronAttack,
"SP Attack(max): " +aggronSpAttack,
"Defense(max): " +aggronDefense,
"Sp Defense(max): " +aggronSpDefense,
"Speed: " +aggronSpeed]

myArray2 = ["HP: " +lucarioHP, "National #: " +lucarioNum, "Type: " +lucarioType,"PowerUpPunch move damage: " +lucarioPowerUpPunch,
"Bone Rush move damage: " +lucarioBoneRush,
"Metal Burst move damage: " +lucarioCloseCombat,
"Best Move: " +lucarioBestMove,
"Is this its last evolution?: " +lucarioLastEvo,
"Attack(max): " +lucarioAttack,
"SP Attack(max): " +lucarioSpAttack,
"Defense(max): " +lucarioDefense,
"Sp Defense(max): " +lucarioSpDefense,
"Speed: " +lucarioSpeed]
    
    
// console.log(Aggron());

for (i=0; i<13; i++) {
  console.log(myArray2[i]);
};