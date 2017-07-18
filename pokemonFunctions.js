function rand(number){
    return(Math.floor(Math.random()*number));
};

function randLetterReturn(){
    return letterArr[letter];
};

function randLetter(){
    var letter = rand(26);
    var letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    return(letterArr[letter]);
};
var letter = rand(26);
var letterArr2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var newArray = ["a","b"];

function randWord(){
    var randW = "";
    for (i=2; i<rand(12); i++){
      randW += randLetter();
    }
    return(randW)
};

function randSentence(){
    var randW2 = "";
    for (i=0; i<rand(26); i++){
         randW2 += randWord();
    }
    return(randW2)
}

var array1 = ["Pikachu", 44, 274]
var array2 = ["Charizard", 64, 360]

function pokeAttack(array1, array2){
    array2[2] -= array1[1];
    return array2;
};

console.log(pokeAttack(array1, array2));