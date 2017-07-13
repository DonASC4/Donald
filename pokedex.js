function pokemonStatFinder(pokemonName){
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

 var myArray = ["HP: " +aggronHP, "National #: " +aggronNum, "Type: " +aggronType,"Takedown move damage: " +aggronTakedown,
"Iron Tail move damage: " +aggronIronTail,
"Double Edge move damage: " +aggronDoubleEdge,
"Best Move: " +aggronBestMove,
"Is this its last evolution?: " +aggronLastEvo,
"Attack(max): " +aggronAttack,
"SP Attack(max): " +aggronSpAttack,
"Defense(max): " +aggronDefense,
"Sp Defense(max): " +aggronSpDefense,
"Speed: " +aggronSpeed]

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

myArray2 = ["HP: " +lucarioHP, "National #: " +lucarioNum, "Type: " +lucarioType,"Extreme Speed move damage: " +lucarioExtremeSpeed,
"Dragon Pulse move damage: " +lucarioDragonPulse,
"Close Combat move damage: " +lucarioCloseCombat,
"Best Move: " +lucarioBestMove,
"Is this its last evolution?: " +lucarioLastEvo,
"Attack(max): " +lucarioAttack,
"SP Attack(max): " +lucarioSpAttack,
"Defense(max): " +lucarioDefense,
"Sp Defense(max): " +lucarioSpDefense,
"Speed: " +lucarioSpeed]

var alakazamHP = 314,
alakazamNum = 65,
alakazamType = "Psychic",
alakazamPsychoCut = 70
alakazamPsychic = 90
alakazamFutureSight = 120
alakazamBestMove = "Future Sight",
alakazamLastEvo = true,
alakazamAttack = 218,
alakazamSpAttack = 405,
alakazamDefense = 207,
alakazamSpDefense = 317,
alakazamSpeed = 372;

 var myArray3 = ["HP: " +alakazamHP, "National #: " +alakazamNum, "Type: " +alakazamType,"PsychoCut move damage: " +alakazamPsychoCut,
"Psychic move damage: " +alakazamPsychic,
"Future Sight move damage: " +alakazamFutureSight,
"Best Move: " +alakazamBestMove,
"Is this its last evolution?: " +alakazamLastEvo,
"Attack(max): " +alakazamAttack,
"SP Attack(max): " +alakazamSpAttack,
"Defense(max): " +alakazamDefense,
"Sp Defense(max): " +alakazamSpDefense,
"Speed: " +alakazamSpeed]

var pikachuHP = 274,
pikachuNum = 25,
pikachuType = "Electric",
pikachuWildCharge = 90
pikachuThunderBolt = 90
pikachuThunder = 110
pikachuBestMove = "Thunder",
pikachuLastEvo = false,
pikachuAttack = 229,
pikachuSpAttack = 218,
pikachuDefense = 196,
pikachuSpDefense = 218,
pikachuSpeed = 306;

var myArray4 = ["HP: " +pikachuHP, "National #: " +pikachuNum, "Type: " +pikachuType,"WildCharge move damage: " +pikachuWildCharge,
"ThunderBolt move damage: " +pikachuThunderBolt,
"Thunder move damage: " +pikachuThunder,
"Best Move: " +pikachuBestMove,
"Is this its last evolution?: " +pikachuLastEvo,
"Attack(max): " +pikachuAttack,
"SP Attack(max): " +pikachuSpAttack,
"Defense(max): " +pikachuDefense,
"Sp Defense(max): " +pikachuSpDefense,
"Speed: " +pikachuSpeed]

var charizardHP = 360,
charizardNum = 6,
charizardType = "Fire/Flying",
charizardHeatWave = 95
charizardInferno = 100
charizardFlareBlitz = 120
charizardBestMove = "Flare Blitz",
charizardLastEvo = false,
charizardAttack = 293,
charizardSpAttack = 348,
charizardDefense = 280,
charizardSpDefense = 295,
charizardSpeed = 328;

var myArray5 = ["HP: " +charizardHP, "National #: " +charizardNum, "Type: " +charizardType,"Heat Wave move damage: " +charizardHeatWave,
"Inferno move damage: " +charizardHeatWave,
"Flare Blitz move damage: " +charizardFlareBlitz,
"Best Move: " +charizardBestMove,
"Is this its last evolution?: " +charizardLastEvo,
"Attack(max): " +charizardAttack,
"SP Attack(max): " +charizardSpAttack,
"Defense(max): " +charizardDefense,
"Sp Defense(max): " +charizardSpDefense,
"Speed: " +charizardSpeed]

var mewtwoHP = 416,
mewtwoNum = 150,
mewtwoType = "Psychic",
mewtwoPsychic = 90
mewtwoPsystrike = 100
mewtwoFutureSight = 120
mewtwoBestMove = "Future Sight",
mewtwoLastEvo = false,
mewtwoAttack = 350,
mewtwoSpAttack = 447,
mewtwoDefense = 306,
mewtwoSpDefense = 306,
mewtwoSpeed = 394;

var myArray6 = ["HP: " +mewtwoHP, "National #: " +mewtwoNum, "Type: " +mewtwoType,"Psychic move damage: " +mewtwoPsychic,
"Psystrike move damage: " +mewtwoPsystrike,
"Future Sight move damage: " +mewtwoFutureSight,
"Best Move: " +mewtwoBestMove,
"Is this its last evolution?: " +mewtwoLastEvo,
"Attack(max): " +mewtwoAttack,
"SP Attack(max): " +mewtwoSpAttack,
"Defense(max): " +mewtwoDefense,
"Sp Defense(max): " +mewtwoSpDefense,
"Speed: " +mewtwoSpeed]

var eeveeHP = 314,
eeveeNum = 133,
eeveeType = "Normal",
eeveeTakedown = 90
eeveeDoubleEdge = 120
eeveeLastResort = 140
eeveeBestMove = "Last Resort",
eeveeLastEvo = false,
eeveeAttack = 229,
eeveeSpAttack = 207,
eeveeDefense = 218,
eeveeSpDefense = 251,
eeveeSpeed = 229;

var myArray7 = ["HP: " +eeveeHP, "National #: " +eeveeNum, "Type: " +eeveeType,"Takedown move damage: " +eeveeTakedown,
"Double Edge move damage: " +eeveeDoubleEdge,
"Last Resort move damage: " +eeveeLastResort,
"Best Move: " +eeveeBestMove,
"Is this its last evolution?: " +eeveeLastEvo,
"Attack(max): " +eeveeAttack,
"SP Attack(max): " +eeveeSpAttack,
"Defense(max): " +eeveeDefense,
"Sp Defense(max): " +eeveeSpDefense,
"Speed: " +eeveeSpeed]

var gengarHP = 314,
gengarNum = 94,
gengarType = "Ghost/Poison",
gengarShadowBall = 80
gengarDarkPulse = 80
gengarDreamEater = 100
gengarBestMove = "Dream Eater",
gengarLastEvo = false,
gengarAttack = 229,
gengarSpAttack = 207,
gengarDefense = 218,
gengarSpDefense = 251,
gengarSpeed = 229;

var myArray8 = ["HP: " +gengarHP, "National #: " +gengarNum, "Type: " +gengarType,"Takedown move damage: " +gengarShadowBall,
"Double Edge move damage: " +gengarDarkPulse,
"Dream Eater move damage: " +gengarDreamEater,
"Best Move: " +gengarBestMove,
"Is this its last evolution?: " +eeveeLastEvo,
"Attack(max): " +gengarAttack,
"SP Attack(max): " +gengarSpAttack,
"Defense(max): " +gengarDefense,
"Sp Defense(max): " +gengarSpDefense,
"Speed: " +gengarSpeed]

var blazikenHP = 364,
blazikenNum = 257,
blazikenType = "Fire/Fighting",
blazikenBraveBird = 120
blazikenFlareBlitz = 120
blazikenHighJumpKick = 130
blazikenBestMove = "High Jump Kick",
blazikenLastEvo = true,
blazikenAttack = 372,
blazikenSpAttack = 350,
blazikenDefense = 262,
blazikenSpDefense = 262,
blazikenSpeed = 284;

var myArray9 = ["HP: " +blazikenHP, "National #: " +blazikenNum, "Type: " +blazikenType,"Brave Bird move damage: " +blazikenBraveBird,
"Flare Blitz move damage: " +blazikenFlareBlitz,
"High Jump Kick move damage: " +blazikenHighJumpKick,
"Best Move: " +blazikenBestMove,
"Is this its last evolution?: " +blazikenLastEvo,
"Attack(max): " +blazikenAttack,
"SP Attack(max): " +blazikenSpAttack,
"Defense(max): " +blazikenDefense,
"Sp Defense(max): " +blazikenSpDefense,
"Speed: " +blazikenSpeed]

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

var myArray10 = ["HP: " +lugiaHP, "National #: " +lugiaNum, "Type: " +lugiaType,"Hydro Pump move damage: " +lugiaHydroPump,
"Future Sight move damage: " +lugiaFutureSight,
"Sky Attack move damage: " +lugiaSkyAttack,
"Best Move: " +lugiaBestMove,
"Is this its last evolution?: " +lugiaLastEvo,
"Attack(max): " +lugiaAttack,
"SP Attack(max): " +lugiaSpAttack,
"Defense(max): " +lugiaDefense,
"Sp Defense(max): " +lugiaSpDefense,
"Speed: " +lugiaSpeed]

var rayquazaHP = 414,
rayquzaNum = 249,
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

    if (pokemonName == "Aggron"){
        for (i=0; i<13; i++){
    console.log(myArray[i]);
} 
    } else if (pokemonName == "Lucario"){
        for (i=0; i<13; i++){
            console.log(myArray2[i]);
        }
    } else if (pokemonName == "Alakazam"){
        for (i=0; i<13; i++){
            console.log(myArray3[i]);
        }
    } else if (pokemonName == "Pikachu"){
        for (i=0; i<13; i++){
            console.log(myArray4[i]);
        }
    } else if (pokemonName == "Charizard"){
        for (i=0; i<13; i++){
            console.log(myArray5[i]);
        }
    } else if (pokemonName == "Mewtwo"){
        for (i=0; i<13; i++){
            console.log(myArray6[i]);
        }
    } else if (pokemonName == "Eevee"){
        for (i=0; i<13; i++){
            console.log(myArray7[i]);
        }
    } else if (pokemonName == "Gengar"){
        for (i=0; i<13; i++){
            console.log(myArray8[i]);
        }
    } else if (pokemonName == "Blaziken"){
        for (i=0; i<13; i++){
            console.log(myArray9[i]);
        }
    } else if (pokemonName == "Lugia"){
        for (i=0; i<13; i++){
            console.log(myArray10[i]);
        }
    } else {
        console.log("error, pokemon not found.")
    }
};

pokemonStatFinder("Riolu");