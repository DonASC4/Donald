mashArray = ["Saffron City","Port Town Aero Dive","Green Hill Zone","Summit","Chatham","your mom's garage","Where the hobos be at", "Somewhere in Kentucky", "*Idk man, im on break*","Rihanna's Forehead"];
firstQuestion = [21, 69, 100, 134, 9283, 4, 234, 39842, 938, 8, 2344, 7, 5, 11, 14, 30,"UNLIMITED","Two grueling", "7 steamy","*Idk man, im on break*",];
secondQuestion = ["Zero suit samus", "Mario", "Samus","Sonic","Luigi","Monsanto","Goku","Izi","The Grinch","Cyril","Thomas","*Idk man, im on break*"];

var prompt = require('prompt-sync')();

var rand = function(number){
    return(Math.floor(Math.random()*number));
};

function smash(){
    var randSmash = rand(mashArray.length);
    var answer = prompt("How many times will you fight? "),
    answer2 = prompt("Who will you choose to fight? ");
    firstQuestion.push(answer);
    secondQuestion.push(answer2);
    console.log("You fought "+ answer2 +" in "+ mashArray[randSmash]+ " "+ answer+" times.");
    if (answer2 == "Zero suit samus"){
        console.log("Zero suit samus huh? For research purposes im sure.");
    } else if ( answer2 == "Sonic"){
        console.log("Just to let you know, you wouldn't even catch Sonic frfr.");
    } else if (answer2 == "Mario"){
        console.log("Luigi's Better tho.");
    } else if (answer2 == "Goku"){
        console.log("Bro....U fought Goku Bro.....U a savage for not dyin' tho.");
    } else if (answer2 == "Luigi"){
        console.log("Now u know u gotta catch a fade for testin my bro luigi right?");
    } else {
        console.log("Good choice, ig");
    }
};

// smash();

function smashRandom(){
    var randSmash = rand(firstQuestion.length);
    var randSmash2 = rand(secondQuestion.length);
    var randSmash3 = rand(mashArray.length);
    console.log("You fought "+ secondQuestion[randSmash2] +" in "+ mashArray[randSmash3]+ " "+ firstQuestion[randSmash]+" times.");
    if (rand(2) === 0){
        console.log("And you won!");
    } else {
        console.log("...but you lost every single time.")
    }
};


smashRandom();
