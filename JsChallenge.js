//Author: Donald D. Poindexter, Jr


let pokemonLedger = []; //Global var for storing total pokemon constructed

//  Pokemon constructor

//Storing values w/ type in array makes checking easier
function Pokemon(name, type, hp, def, atk, legend) {
    pokemonLedger.push(this);
    this.totalPokemon = pokemonLedger; //Each pokemon has a copy of the ledger

    this.name = [name, 'string'];
    this.type = [type, 'string'];
    this.hp = [hp, 'number'];
    this.def = [def, 'number'];
    this.atk = [atk, 'number'];
    this.legend = [legend, 'boolean'];
    this.attributes = [this.name, this.type, this.hp, this.def, this.atk, this.legend]; //Makes looping though atributes to check type easier

    this.check(); //Attribute types checked within constructor; Errors are checked for immediately
}

// Functions for Pokemon object

//Checks if type has same type found in array
Pokemon.prototype.check = function() {
    let lim = this.attributes.length;
    let atrbs = this.attributes;

    for (let i = 0; i < lim; i++) {
        if (typeof atrbs[i][0] != atrbs[i][1]) {
            console.log('Type Error! ' + atrbs[i][0] + ' must be of type ' + atrbs[i][1]);
        }
    }
}

//Manipulates specified pokemon's hp directly
Pokemon.prototype.attack = function(pMan) {
    let newHp = pMan.hp[0] -= this.atk[0];

    if (newHp < 0) {
        pMan.hp[0] = 0;
    } else {
        pMan.hp[0] = newHp;
    }
}

//Checks hp value
Pokemon.prototype.aliveCheck = function() {
    return this.hp[0] > 0; //Can return result instead of using if statement. More efficient this way (and easier to look at)
}

//Returns personal copy of legder
Pokemon.prototype.all = function() {
    return this.totalPokemon;
}
