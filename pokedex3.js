//This is the code necessary to add a pokemon to the pokedex as of now. *7/14/17*\
//Between 49 and 51 lines of code for a single pokemon!
//49 lines = raw data
//50 lines = raw data + running it in a function
//51 lines = raw data + running it in both functions
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
if (pokemonName == "Hitmonchan"){
        for (i=0; i<14; i++){
            console.log(myArray18[i]);
        }
}
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
pokemonStatFinder("Hitmonchan");
pokemonCompare(Hitmonlee, Hitmonchan);
