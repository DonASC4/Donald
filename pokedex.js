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
"Speed(max): " +aggronSpeed]

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
"Speed(max): " +lucarioSpeed]

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
"Speed(max): " +alakazamSpeed]

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
"Speed(max): " +pikachuSpeed]

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
"Speed(max): " +charizardSpeed]

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
"Speed(max): " +mewtwoSpeed]

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
"Speed(max): " +eeveeSpeed]

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
"Is this its last evolution?: " +gengarLastEvo,
"Attack(max): " +gengarAttack,
"SP Attack(max): " +gengarSpAttack,
"Defense(max): " +gengarDefense,
"Sp Defense(max): " +gengarSpDefense,
"Speed(max): " +gengarSpeed]

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
"Speed(max): " +blazikenSpeed]

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
"Speed(max): " +lugiaSpeed]

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

var myArray11 = ["HP: " +rayquazaHP, "National #: " +rayquazaNum, "Type: " +rayquazaType,"Hyper Voice move damage: " +rayquazaHyperVoice,
"Outrage move damage: " +rayquazaOutrage,
"Hyper Beam move damage: " +rayquazaHyperBeam,
"Best Move: " +rayquazaBestMove,
"Is this its last evolution?: " +rayquazaLastEvo,
"Attack(max): " +rayquazaAttack,
"SP Attack(max): " +rayquazaSpAttack,
"Defense(max): " +rayquazaDefense,
"Sp Defense(max): " +rayquazaSpDefense,
"Speed(max): " +rayquazaSpeed]

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

var myArray12 = ["HP: " +garchompHP, "National #: " +garchompNum, "Type: " +garchompType,"Dragon Claw move damage: " +garchompDragonClaw,
"Takedown move damage: " +garchompTakedown,
"Dragon Rush move damage: " +garchompDragonRush,
"Best Move: " +garchompBestMove,
"Is this its last evolution?: " +garchompLastEvo,
"Attack(max): " +garchompAttack,
"SP Attack(max): " +garchompSpAttack,
"Defense(max): " +garchompDefense,
"Sp Defense(max): " +garchompSpDefense,
"Speed(max): " +garchompSpeed]

var squirtleInfo = "Squirtle was introduced in generation 1 and is otherwise known as the 'Tiny Turtle Pokemon'. Also, its hard shell isn't just for protection and actually minimizes resistance in water, improving swiming speed.",
squirtleHP = 292,
squirtleNum = 7,
squirtleType = "Water",
squirtleWaterPulse = 60
squirtleAquaTail = 90
squirtleSkullBash = 130
squirtleBestMove = "Skull Bash",
squirtleLastEvo = false,
squirtleAttack = 214,
squirtleSpAttack = 218,
squirtleDefense = 351,
squirtleSpDefense = 249,
squirtleSpeed = 203;

var myArray13 = ["General Info: " +squirtleInfo, "HP: " +squirtleHP, "National #: " +squirtleNum, "Type: " +squirtleType,"Water Pulse move damage: " +squirtleWaterPulse,
"Aqua Tail move damage: " +squirtleAquaTail,
"Skull Bash move damage: " +squirtleSkullBash,
"Best Move: " +squirtleBestMove,
"Is this its last evolution?: " +squirtleLastEvo,
"Attack(max): " +squirtleAttack,
"SP Attack(max): " +squirtleSpAttack,
"Defense(max): " +squirtleDefense,
"Sp Defense(max): " +squirtleSpDefense,
"Speed(max): " +squirtleSpeed];


var greninjaInfo = "Greninja was introduced in generation 6 and is known as the 'Ninja Pokemon'. It can create ninja stars out of water and vanish with a ninja's grace.",
greninjaHP = 348,
greninjaNum = 658,
greninjaType = "Water/Dark",
greninjaNightSlash = 70
greninjaExtrasensory = 80
greninjaHydroPump = 110
greninjaBestMove = "Hydro Pump",
greninjaLastEvo = true,
greninjaAttack = 348,
greninjaSpAttack = 335,
greninjaDefense = 256,
greninjaSpDefense = 265,
greninjaSpeed = 377;

var myArray14 = ["General Info: " +greninjaInfo, "HP: " +greninjaHP, "National #: " +greninjaNum, "Type: " +greninjaType,"Night Slash move damage: " +greninjaNightSlash,
"Extrasensory move damage: " +greninjaExtrasensory,
"Hydro Pump move damage: " +greninjaHydroPump,
"Best Move: " +greninjaBestMove,
"Is this its last evolution?: " +greninjaLastEvo,
"Attack(max): " +greninjaAttack,
"SP Attack(max): " +greninjaSpAttack,
"Defense(max): " +greninjaDefense,
"Sp Defense(max): " +greninjaSpDefense,
"Speed(max): " +greninjaSpeed];

var haunterInfo = "Haunter was introduced in Generation 1 and is also known as the 'Gas Pokemon'. Haunter watches you from the darkness and steals life force away by licking its victims.",
haunterHP = 294,
haunterNum = 93,
haunterType = "Ghost/Poison",
haunterShadowBall = 80
haunterDarkPulse = 80
haunterDreamEater = 100
haunterBestMove = "Dream Eater",
haunterLastEvo = false,
haunterAttack = 218,
haunterSpAttack = 361,
haunterDefense = 207,
haunterSpDefense = 229,
haunterSpeed = 317;

var myArray15 = ["General Info: "+ haunterInfo, "HP: " +haunterHP, "National #: " +haunterNum, "Type: " +haunterType,"Shadow Ball move damage: " +haunterShadowBall,
"Dark Pulse move damage: " +haunterDarkPulse,
"Dream Eater move damage: " +haunterDreamEater,
"Best Move: " +haunterBestMove,
"Is this its last evolution?: " +haunterLastEvo,
"Attack(max): " +haunterAttack,
"SP Attack(max): " +haunterSpAttack,
"Defense(max): " +haunterDefense,
"Sp Defense(max): " +haunterSpDefense,
"Speed(max): " +haunterSpeed]

var snorlaxInfo = "Snorlax was introduced in Generation 1 and is also known as the 'Sleeping Pokemon'. Snorlax mostly just eats and sleeps, becoming steadily more slothful. Its stomach's digestive juices are so acidic that it dissolves all poison/moldy/rotten food or anything that would otherwise be dangerous/fatal.",
snorlaxHP = 524,
snorlaxNum = 143,
snorlaxType = "Normal",
snorlaxBodySlam = 85
snorlaxHighHorsepower = 95
snorlaxGigaImpact = 150
snorlaxBestMove = "Giga Impact",
snorlaxLastEvo = true,
snorlaxAttack = 350,
snorlaxSpAttack = 251,
snorlaxDefense = 251,
snorlaxSpDefense = 350,
snorlaxSpeed = 174;

var myArray16 = ["General Info: "+ snorlaxInfo, "HP: " +snorlaxHP, "National #: " +snorlaxNum, "Type: " +snorlaxType,"Body Slam move damage: " +snorlaxBodySlam,
"High Horsepower move damage: " +snorlaxHighHorsepower,
"Giga Impact move damage: " +snorlaxGigaImpact,
"Best Move: " +snorlaxBestMove,
"Is this its last evolution?: " +snorlaxLastEvo,
"Attack(max): " +snorlaxAttack,
"SP Attack(max): " +snorlaxSpAttack,
"Defense(max): " +snorlaxDefense,
"Sp Defense(max): " +snorlaxSpDefense,
"Speed(max): " +snorlaxSpeed];

var hitmonleeInfo = "Hitmonlee was introduced in Generation 1 and is also known as the 'Kicking Pokemon'. Hitmonlee's legs are elastic and can freely contract and expand. Also, part of what makes Hitmonlee so effective at kicking is how the soles of its feet can become as hard as diamond.",
hitmonleeHP = 304
hitmonleeNum = 106,
hitmonleeType = "Fighting",
hitmonleeMegaKick = 120
hitmonleeCLoseCombat = 120
hitmonleeHighJumpKick = 130
hitmonleeBestMove = "High Jump Kick",
hitmonleeLastEvo = true,
hitmonleeAttack = 372,
hitmonleeSpAttack = 185,
hitmonleeDefense = 225,
hitmonleeSpDefense = 350,
hitmonleeSpeed = 300;

var myArray17 = ["General Info: "+ hitmonleeInfo,"HP: " +hitmonleeHP, "National #: " +hitmonleeNum, "Type: " +hitmonleeType,"Mega Kick move damage: " +hitmonleeMegaKick,
"CLose Combat move damage: " +hitmonleeCLoseCombat,
"High Jump Kick move damage: " +hitmonleeHighJumpKick,
"Best Move: " +hitmonleeBestMove,
"Is this its last evolution?: " +hitmonleeLastEvo,
"Attack(max): " +hitmonleeAttack,
"SP Attack(max): " +hitmonleeSpAttack,
"Defense(max): " +hitmonleeDefense,
"Sp Defense(max): " +hitmonleeSpDefense,
"Speed(max): " +hitmonleeSpeed];

var hitmonchanInfo = "Hitmonchan was introduced in Generation 1 and is also known as the 'Punching Pokemon'. Hitmonchan throws punches so fast that it's almost impossible to see and increases its strength by spining its arms beforehand.",
hitmonchanHP = 304
hitmonchanNum = 107,
hitmonchanType = "Fighting",
hitmonchanSkyUppercut = 85
hitmonchanCLoseCombat = 120
hitmonchanFocusPunch = 150
hitmonchanBestMove = "Focus Punch",
hitmonchanLastEvo = true,
hitmonchanAttack = 339,
hitmonchanSpAttack = 185,
hitmonchanDefense = 282,
hitmonchanSpDefense = 350,
hitmonchanSpeed = 276;

var myArray18 = ["General Info: "+ hitmonchanInfo, "HP: " +hitmonchanHP, "National #: " +hitmonchanNum, "Type: " +hitmonchanType,"Sky Uppercut move damage: " +hitmonchanSkyUppercut,
"CLose Combat move damage: " +hitmonchanCLoseCombat,
"Focus Punch move damage: " +hitmonchanFocusPunch,
"Best Move: " +hitmonchanBestMove,
"Is this its last evolution?: " +hitmonchanLastEvo,
"Attack(max): " +hitmonchanAttack,
"SP Attack(max): " +hitmonchanSpAttack,
"Defense(max): " +hitmonchanDefense,
"Sp Defense(max): " +hitmonchanSpDefense,
"Speed(max): " +hitmonchanSpeed];

var suicuneInfo = "Suicune was introduced in Generation 2 and is also known as the 'Aurora Pokemon'. Suicune is said to be the reincarnation of north winds, always in search of a pure reservoir. In addtion, this pokemon has the ability to instantly purify filthy water.",
suicuneHP = 404,
suicuneNum = 245,
suicuneType = "Water",
suicuneExtrasensory = 80,
suicuneBlizzard = 110,
suicuneHydroPump = 110,
suicuneBestMove = "Hydro Pump",
suicuneLastEvo = true,
suicuneAttack = 273,
suicuneSpAttack = 306,
suicuneDefense = 361,
suicuneSpDefense = 361,
suicuneSpeed = 295;

var myArray19 = ["General Info: "+ suicuneInfo, "HP: " +suicuneHP, "National #: " +suicuneNum, "Type: " +suicuneType,"Extrasensory move damage: " +suicuneExtrasensory,
"Blizzard move damage: " +suicuneBlizzard,
"Hydro Pump move damage: " +suicuneHydroPump,
"Best Move: " +suicuneBestMove,
"Is this its last evolution?: " +suicuneLastEvo,
"Attack(max): " +suicuneAttack,
"SP Attack(max): " +suicuneSpAttack,
"Defense(max): " +suicuneDefense,
"Sp Defense(max): " +suicuneSpDefense,
"Speed(max): " +suicuneSpeed];

var sharpedoInfo = "Sharpedo was introduced in Generation 3 and is also known as the 'Brutal Pokemon'. Sharpedo is often called the 'bully of the sea' due to its ruthless nature. It can instantly grow back its teeth and though it can't swim long distances, it can swim at up to 75 mph.",
sharpedoHP = 344,
sharpedoNum = 319,
sharpedoType = "Water/Dark",
sharpedoSlash = 70,
sharpedoCrunch = 80,
sharpedoSkullBash = 130,
sharpedoBestMove = "Skull Bash",
sharpedoLastEvo = false,
sharpedoAttack = 372,
sharpedoSpAttack = 317,
sharpedoDefense = 196,
sharpedoSpDefense = 196,
sharpedoSpeed = 317;

var myArray20 = ["General Info: "+ sharpedoInfo, "HP: " +sharpedoHP, "National #: " +sharpedoNum, "Type: " +sharpedoType,"Slash move damage: " +sharpedoSlash,
"Crunch move damage: " +sharpedoCrunch,
"Skull Bash move damage: " +sharpedoSkullBash,
"Best Move: " +sharpedoBestMove,
"Is this its last evolution?: " +sharpedoLastEvo,
"Attack(max): " +sharpedoAttack,
"SP Attack(max): " +sharpedoSpAttack,
"Defense(max): " +sharpedoDefense,
"Sp Defense(max): " +sharpedoSpDefense,
"Speed(max): " +sharpedoSpeed];

var articunoInfo = "Articuno was introduced in Generation 1 and is also known as the 'Freeze Pokemon'. Articuno is a legendary bird pokemon that is said to have seemingly translucent wings made of ice. It can control ice and is said to appear to doomed people in icy mountains.",
articunoHP = 384,
articunoNum = 144,
articunoType = "Ice/Flying",
articunoIceBeam = 90,
articunoBlizzard = 110,
articunoHurricane = 110,
articunoBestMove = "Hurricane",
articunoLastEvo = true,
articunoAttack = 295,
articunoSpAttack = 317,
articunoDefense = 328,
articunoSpDefense = 383,
articunoSpeed = 295;

var myArray21 = ["General Info: "+ articunoInfo, "HP: " +articunoHP, "National #: " +articunoNum, "Type: " +articunoType,"Ice Beam move damage: " +articunoIceBeam,
"Blizzard move damage: " +articunoBlizzard,
"Hurricane move damage: " +articunoHurricane,
"Best Move: " +articunoBestMove,
"Is this its last evolution?: " +articunoLastEvo,
"Attack(max): " +articunoAttack,
"SP Attack(max): " +articunoSpAttack,
"Defense(max): " +articunoDefense,
"Sp Defense(max): " +articunoSpDefense,
"Speed(max): " +articunoSpeed];

var scizorInfo = "Scizor was introduced in Generation 2 and is also known as the 'Pincer Pokemon'. Scizor swings its eye patterned pincers up to scare foes, making it look like it has three heads. Scizor also has wings but they are not used for flying, instead flapping at high speeds to adjust body temp.",
scizorHP = 344,
scizorNum = 212,
scizorType = "Bug/Steel",
scizorRazorWind = 80,
scizorIronHead = 80,
scizorXScissor = 80,
scizorBestMove = "X-Scissor",
scizorLastEvo = false,
scizorAttack = 394,
scizorSpAttack = 229,
scizorDefense = 394,
scizorSpDefense = 284,
scizorSpeed = 251;

var myArray22 = ["General Info: "+ scizorInfo, "HP: " +scizorHP, "National #: " +scizorNum, "Type: " +scizorType,"Razor Wind move damage: " +"Iron Head move damage: " +scizorIronHead,
"XScizor move damage: " +scizorXScissor,
"Best Move: " +scizorBestMove,
"Is this its last evolution?: " +scizorLastEvo,
"Attack(max): " +scizorAttack,
"SP Attack(max): " +scizorSpAttack,
"Defense(max): " +scizorDefense,
"Sp Defense(max): " +scizorSpDefense,
"Speed(max): " +scizorSpeed];

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
    } else if (pokemonName == "Rayquaza"){
        for (i=0; i<13; i++){
            console.log(myArray11[i]);
        }
    } else if (pokemonName == "Garchomp"){
        for (i=0; i<13; i++){
            console.log(myArray12[i]);
        }
    } else if (pokemonName == "Squirtle"){
        for (i=0; i<14; i++){
            console.log(myArray13[i]);
        }
    } else if (pokemonName == "Greninja"){
        for (i=0; i<14; i++){
            console.log(myArray14[i]);
        }
    } else if (pokemonName == "Haunter"){
        for (i=0; i<14; i++){
            console.log(myArray15[i]);
        }
    } else if (pokemonName == "Snorlax"){
        for (i=0; i<14; i++){
            console.log(myArray16[i]);
        }
    } else if (pokemonName == "Hitmonlee"){
        for (i=0; i<14; i++){
            console.log(myArray17[i]);
        }
    } else if (pokemonName == "Hitmonchan"){
        for (i=0; i<14; i++){
            console.log(myArray18[i]);
        }
    } else if (pokemonName == "Suicune"){
        for (i=0; i<14; i++){
            console.log(myArray19[i]);
        }
    } else if (pokemonName == "Sharpedo"){
        for (i=0; i<14; i++){
            console.log(myArray20[i]);
        }
    } else if (pokemonName == "Articuno"){
        for (i=0; i<14; i++){
            console.log(myArray21[i]);
        }
    } else if (pokemonName == "Scizor"){
        for (i=0; i<14; i++){
            console.log(myArray22[i]);
        }
    } else {
        console.log("error, pokemon not found.")
    }
};

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

var pikachuArray = ["Pikachu",[pikachuHP,pikachuWildCharge,pikachuThunderBolt,pikachuThunder,pikachuAttack,
pikachuSpAttack,
pikachuDefense,
pikachuSpDefense,
pikachuSpeed]];

var Pikachu = pikachuArray

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

var charizardArray = ["Charizard",[charizardHP,charizardHeatWave,charizardInferno,charizardFlareBlitz,charizardAttack,
charizardSpAttack,
charizardDefense,
charizardSpDefense,
charizardSpeed]];

var Charizard = charizardArray

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

var mewtwoArray = ["Mewtwo",[mewtwoHP,mewtwoPsychic,mewtwoPsystrike,mewtwoFutureSight,mewtwoAttack,
mewtwoSpAttack,
mewtwoDefense,
mewtwoSpDefense,
mewtwoSpeed]];

var Mewtwo = mewtwoArray

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

var eeveeArray = ["Eevee",[eeveeHP,eeveeTakedown,eeveeDoubleEdge,eeveeLastResort,eeveeAttack,
eeveeSpAttack,
eeveeDefense,
eeveeSpDefense,
eeveeSpeed]];

var Eevee = eeveeArray

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

var gengarArray = ["Gengar",[gengarHP,gengarShadowBall,gengarDarkPulse,gengarDreamEater,gengarAttack,
gengarSpAttack,
gengarDefense,
gengarSpDefense,
gengarSpeed]];

var Gengar = gengarArray

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

var blazikenArray = ["Blaziken",[blazikenHP,blazikenBraveBird,blazikenFlareBlitz,blazikenFlareBlitz,blazikenAttack,
blazikenSpAttack,
blazikenDefense,
blazikenSpDefense,
blazikenSpeed]];

var Blaziken = blazikenArray

var squirtleInfo = "Squirtle was introduced in generation 1 and is otherwise known as the 'Tiny Turtle Pokemon'. Also, its hard shell isn't just for protection and actually minimizes resistance in water, improving swiming speed12.",
squirtleHP = 292,
squirtleNum = 7,
squirtleType = "Water",
squirtleWaterPulse = 60
squirtleAquaTail = 90
squirtleSkullBash = 130
squirtleBestMove = "Skull Bash",
squirtleLastEvo = false,
squirtleAttack = 214,
squirtleSpAttack = 218,
squirtleDefense = 351,
squirtleSpDefense = 249,
squirtleSpeed = 203;

var squirtleArray = ["Squirtle",[squirtleHP,squirtleWaterPulse,squirtleAquaTail,squirtleSkullBash,squirtleAttack,
squirtleSpAttack,
squirtleDefense,
squirtleSpDefense,
squirtleSpeed]];

var Squirtle = squirtleArray

var greninjaInfo = "Greninja was introduced in generation 6 and is known as the 'Ninja Pokemon'. It can create ninja stars out of water and vanish with a ninja's grace.",
greninjaHP = 348,
greninjaNum = 658,
greninjaType = "Water/Dark",
greninjaNightSlash = 70
greninjaExtrasensory = 80
greninjaHydroPump = 110
greninjaBestMove = "Hydro Pump",
greninjaLastEvo = true,
greninjaAttack = 348,
greninjaSpAttack = 335,
greninjaDefense = 256,
greninjaSpDefense = 265,
greninjaSpeed = 377;

var greninjaArray = ["Greninja",[greninjaHP,greninjaNightSlash,greninjaExtrasensory,greninjaHydroPump,greninjaAttack,
greninjaSpAttack,
greninjaDefense,
greninjaSpDefense,
greninjaSpeed]];

var Greninja = greninjaArray

var haunterInfo = "Haunter was introduced in Generation 1 and is also known as the 'Gas Pokemon'. Haunter watches you from the darkness and steals life force away by licking its victims.",
haunterHP = 294,
haunterNum = 93,
haunterType = "Ghost/Poison",
haunterShadowBall = 80
haunterDarkPulse = 80
haunterDreamEater = 100
haunterBestMove = "Dream Eater",
haunterLastEvo = false,
haunterAttack = 218,
haunterSpAttack = 361,
haunterDefense = 207,
haunterSpDefense = 229,
haunterSpeed = 317;

var haunterArray = ["Haunter",[haunterHP,haunterShadowBall,haunterDarkPulse,haunterDreamEater,haunterAttack,
haunterSpAttack,
haunterDefense,
haunterSpDefense,
haunterSpeed]];

var Haunter = haunterArray

var snorlaxInfo = "Snorlax was introduced in Generation 1 and is also known as the 'Sleeping Pokemon'. Snorlax mostly just eats and sleeps, becoming steadily more slothful. Its stomach's digestive juices are so acidic that it dissolves all poison/moldy/rotten food or anything that would otherwise be dangerous/fatal.",
snorlaxHP = 524,
snorlaxNum = 143,
snorlaxType = "Normal",
snorlaxBodySlam = 85
snorlaxHighHorsepower = 95
snorlaxGigaImpact = 150
snorlaxBestMove = "Giga Impact",
snorlaxLastEvo = true,
snorlaxAttack = 350,
snorlaxSpAttack = 251,
snorlaxDefense = 251,
snorlaxSpDefense = 350,
snorlaxSpeed = 174;

var snorlaxArray = ["Snorlax",[snorlaxHP,snorlaxBodySlam,snorlaxHighHorsepower,snorlaxGigaImpact,snorlaxAttack,
snorlaxSpAttack,
snorlaxDefense,
snorlaxSpDefense,
snorlaxSpeed]];

var Snorlax = snorlaxArray

var hitmonleeInfo = "Hitmonlee was introduced in Generation 1 and is also known as the 'Kicking Pokemon'. Hitmonlee's legs are elastic and can freely contract and expand. Also, part of what makes Hitmonlee so effective at kicking is how the soles of its feet can become as hard as diamond.",
hitmonleeHP = 304
hitmonleeNum = 106,
hitmonleeType = "Fighting",
hitmonleeMegaKick = 120
hitmonleeCLoseCombat = 120
hitmonleeHighJumpKick = 130
hitmonleeBestMove = "High Jump Kick",
hitmonleeLastEvo = true,
hitmonleeAttack = 372,
hitmonleeSpAttack = 185,
hitmonleeDefense = 225,
hitmonleeSpDefense = 350,
hitmonleeSpeed = 300;

var hitmonleeArray = ["Hitmonlee",[hitmonleeHP,hitmonleeMegaKick,hitmonleeCLoseCombat,hitmonleeHighJumpKick,hitmonleeAttack,
hitmonleeSpAttack,
hitmonleeDefense,
hitmonleeSpDefense,
hitmonleeSpeed]];

var Hitmonlee = hitmonleeArray

var hitmonchanInfo = "Hitmonchan was introduced in Generation 1 and is also known as the 'Punching Pokemon'. Hitmonlee's legs are elastic and can freely contract and expand. Hitmonchan throws punches so fast that it's almost impossible to see and to increase its strength beforehand, it spins its arms just before making contact.",
hitmonchanHP = 304
hitmonchanNum = 107,
hitmonchanType = "Fighting",
hitmonchanSkyUppercut = 85
hitmonchanCLoseCombat = 120
hitmonchanFocusPunch = 150
hitmonchanBestMove = "Focus Punch",
hitmonchanLastEvo = true,
hitmonchanAttack = 339,
hitmonchanSpAttack = 185,
hitmonchanDefense = 282,
hitmonchanSpDefense = 350,
hitmonchanSpeed = 276;

var hitmonchanArray = ["Hitmonchan",[hitmonchanHP,hitmonchanSkyUppercut,hitmonchanCLoseCombat,hitmonchanFocusPunch,hitmonchanAttack,
hitmonchanSpAttack,
hitmonchanDefense,
hitmonchanSpDefense,
hitmonchanSpeed]];

var Hitmonchan = hitmonchanArray

var suicuneInfo = "Suicune was introduced in Generation 2 and is alss known as the 'Aurora Pokemon'. Suicune is said to be the reincarnation of north winds, always in search of a pure reservoir. In addtion, this pokemon has the ability to instantly purify filthy water.",
suicuneHP = 404
suicuneNum = 245,
suicueType = "Water",
suicuneExtrasensory = 80
suicuneBlizzard = 110
suicuneHydroPump = 110
suicuneBestMove = "Hydro Pump",
suicuneLastEvo = true,
suicuneAttack = 273,
suicuneSpAttack = 306,
suicuneDefense = 361,
suicuneSpDefense = 361,
suicuneSpeed = 295;

var suicuneArray = ["Suicune",[suicuneHP,suicuneExtrasensory,suicuneBlizzard,suicuneHydroPump,suicuneAttack,
suicuneSpAttack,
suicuneDefense,
suicuneSpDefense,
suicuneSpeed]];

var Suicune = suicuneArray

var sharpedoInfo = "Sharpedo was introduced in Generation 3 and is also known as the 'Brutal Pokemon'. Sharpedo is often called the 'bully of the sea' due to its ruthless nature. It can instantly grow back its teeth and though it can't swim long distances, it can swim at up to 75 mph.",
sharpedoHP = 344
sharpedoNum = 319,
sharpedoType = "Water/Dark",
sharpedoSlash = 70
sharpedoCrunch = 80
sharpedoSkullBash = 130
suicuneBestMove = "Skull Bash",
sharrpedoLastEvo = false,
sharpedoAttack = 372,
sharpedoSpAttack = 317,
sharpedoDefense = 196,
sharpedoSpDefense = 196,
sharpedoSpeed = 317;

var sharpedoArray = ["Sharpedo",[sharpedoHP,sharpedoSlash,sharpedoCrunch,sharpedoSkullBash,sharpedoAttack,
sharpedoSpAttack,
sharpedoDefense,
sharpedoSpDefense,
sharpedoSpeed]];

var Sharpedo = sharpedoArray

var articunoInfo = "Articuno was introduced in Generation 1 and is also known as the 'Freeze Pokemon'. Articuno is a legendary bird pokemon that is said to have seemingly translucent wings made of ice. It can control ice and is said to appear to doomed people in icy mountains.",
articunoHP = 384,
articunoNum = 144,
articunoType = "Ice/Flying",
articunoIceBeam = 90,
articunoBlizzard = 110,
articunoHurricane = 110,
articunoBestMove = "Hurricane",
articunoLastEvo = true,
articunoAttack = 295,
articunoSpAttack = 317,
articunoDefense = 328,
articunoSpDefense = 383,
articunoSpeed = 295;

var articunoArray = ["Articuno",[articunoHP,articunoIceBeam,articunoBlizzard,articunoHurricane,articunoAttack,
articunoSpAttack,
articunoDefense,
articunoSpDefense,
articunoSpeed]];

var Articuno = articunoArray

var metagrossInfo = "Metagross was introduced in Generation 3 and is also known as the 'Iron Leg Pokemon'. Metagross has a total of four brains and is the result of two Metangs fusing. Combined, the brains are said to be superior to a supercomputer.",
metagrossHP = 364,
metagrossNum = 376,
metagrossType = "Steel/Psychic",
metagrossPsychic = 90,
metagrossHammerArm = 100,
metagrossHyperBeam = 150,
metagrossBestMove = "Hyper Beam",
metagrossLastEvo = false,
metagrossAttack = 405,
metagrossSpAttack = 317,
metagrossDefense = 394,
metagrossSpDefense = 306,
metagrossSpeed = 262;

var metagrossArray = ["Metagross",[metagrossHP,metagrossPsychic,metagrossHammerArm,metagrossHyperBeam,metagrossAttack,
metagrossSpAttack,
metagrossDefense,
metagrossSpDefense,
metagrossSpeed]];

var Metagross = metagrossArray

var scizorinfo = "Scizor was introduced in Generation 2 and is also known as the 'Pincer Pokemon'. Scizor swings its eye patterned pincers up to scare foes, making it look like it has three heads. Scizor also has wings but they are not used for flying, instead flapping at high speeds to adjust body temp.",
scizorHP = 344,
scizorNum = 212,
scizorType = "Bug/Steel",
scizorRazorWind = 80,
scizorIronHead = 80,
scizorXScissor = 80,
scizorBestMove = "X-Scissor",
scizorLastEvo = false,
scizorAttack = 394,
scizorSpAttack = 229,
scizorDefense = 394,
scizorSpDefense = 284,
scizorSpeed = 251;

var scizorArray = ["Scizor",[scizorHP,scizorRazorWind,scizorIronHead,scizorXScissor,scizorAttack,
scizorSpAttack,
scizorDefense,
scizorSpDefense,
scizorSpeed]];

var Scizor = scizorArray

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
pokemonStatFinder("Aggron");
// pokemonCompare(Hitmonchan, Scizor);
//pokemon list: Suicune, Himonlee, Hitmonchan, Pikachu,
//Greninja, Gengar, Squirtle, Charizard, Mewtwo, Alakazam,
//Lucario, Aggron, Eevee, Lugia, Rayquaza, Garchomp, Snorax'
//Haunter, Sharpedo, Articuno, Metagross, Scizor


//Gengar and Eevee have a lot in common
//Squirtle starts at line 303
//Greninja starts at line 330
//Haunter stars at 356
//Snorlax starts at line 382
//Squirtle starts at line 303
//Hitmonlee starts at line 408
//Hitmonchan starts at line 434
//Suicune starts at line 460
