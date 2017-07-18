function Pokemon(name, atk, atkName, atk2, atk2Name, atk3, atk3Name, def, hp, legend, rostpos, type){
    this.name = name
    this.atk = atk;//flare Blitz, Metal Burst
    this.atkName = atkName;
    this.atk2 = atk2;//Inferno, Double 
    this.atk2Name = atk2Name;
    this.atk3 = atk3;//Heat wave, Rock Slide
    this.atk3Name = atk3Name;
    this.def = def;
    this.hp = hp;
    this.legend = legend;
    this.rostpos = rostpos;
    this.type = type;
};
//atk = best move atk points
var Charizard = new Pokemon("Charizard",120,"Flame Blitz",100,"Inferno",95,"Heat Wave",280,360,false,"1st","Fire/Flying");
var Aggron = new Pokemon("Aggron",100,"Metal Burst",100,"Double Edge",90,"Rock Slide",504,344,false,"2nd","Steel/Rock");
var prompt = require('prompt-sync')();
function rand(number){
    return(Math.floor(Math.random()*number))
};

var pokeRoster = [Charizard, Aggron];

function printRoster(roster){
console.log("Printing roster now!");
for (i=0; i<roster.length; i++){
    console.log(roster[i]);
}
};

function pokemonAttacked(roster){
    for (i=0; i<roster.length; i++){
        roster[i].hp -= 10;
        console.log(roster[i]);
    }
};

printRoster(pokeRoster);
console.log("A wild pokemon just sneak attacked your crew! ");
pokemonAttacked(pokeRoster);

// function pokemonBattle(pokemon1, pokemon2){
//     var choose = prompt("Choose your pokemon: "+pokemon1.name+","+" "+pokemon2.name+" ");
//     if (choose == pokemon1.name){
//         var choose2 = prompt("Who will you fight: "+pokemon2.name+" ");
//     } else if (choose == pokemon2.name){
//         var choose2 = prompt("Who will you fight: "+pokemon1.name+" ");
//     } if (choose2 == pokemon2.name){
//         var choose3 = prompt("What will you you do: fight, run ");
//     } else if (choose2 == pokemon1.name){
//         var choose3 = prompt("What will you you do: fight, run ");
//     } if (choose3 == "run" && choose == pokemon1.name){
//         console.log = "You fled succesfully with "+pokemon1.hp+" HP remaining.");
//     } else if (choose3 == "run" && choose == pokemon2.name){
//         console.log = "You fled succesfully with "+pokemon2.hp+" HP remaining.");
//     } if (choose3 == "fight" && choose == pokemon1.name){
//         var choose4 = prompt("Choose an attack: "+pokemon1.atk3Name+","+" "+pokemon1.atk2Name+","+" or "+pokemon1.atkName+" ");
//     } else if (choose3 == "fight" && choose == pokemon2.name){
//         var choose4 = prompt("Choose an attack: "+pokemon2.atk3Name+","+" "+pokemon2.atk2Name+","+" or "+pokemon2.atkName+" ");
//     } 
// };
// pokemonBattle(Charizard, Aggron);

// function pokemonBattle(pokemon1, pokemon2){
//         var choose = prompt("Choose your pokemon: "+pokemon1.name+","+" "+pokemon2.name+" ");
//         if (choose == pokemon1.name){
//             var choose2 = prompt("Choose an attack: "+pokemon1.atk3Name+","+" "+pokemon1.atk2Name+","+" or "+pokemon1.atkName+" ");
//         } else if (choose == pokemon2.name){
//             var choose2 = prompt("Choose an attack: "+pokemon2.atk3Name+","+" "+pokemon2.atk2Name+","+" or "+pokemon2.atkName+" ")
//         } if (choose2 == pokemon1.atk3Name && rand(4) == 0){
//             console.log(pokemon1.name+" used "+ pokemon1.atk3Name+" on "+pokemon2.name+"...but it missed! ");
//         } else if (choose2 == pokemon1.atk3Name && rand(4) == 1){
//             console.log(choose2 == pokemon1.name+ " used "+ pokemon.atk3Name+" on "+pokemon2.name+"! ");
//             console.log(pokemon2.name+" remaining HP: "+ (pokemon2.hp - pokemon1.atk3));
//         } else if (choose2 == pokemon1.atk3Name && rand(4) == 2){
//             console.log(pokemon1.name+ " used "+ pokemon.atk3Name+" on "+pokemon2.name+"! ");
//             console.log(pokemon2.name+" remaining HP: "+ (pokemon2.hp - pokemon1.atk3));
//         } else if (choose2 == pokemon1.atk3Name && rand(4) == 3){
//             console.log(pokemon1.name+ " used "+ pokemon.atk3Name+" on "+pokemon2.name+"...and it was super effective! ");
//             console.log(pokemon2.name+ "remaining HP: "+ (pokemon2.hp - pokemon1.atk3)); 
//         }
//     };

// pokemonBattle(Charizard, Aggron)
