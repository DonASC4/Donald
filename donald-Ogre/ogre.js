var HP = 100;
var gold = 0;
var numDef = 0;

function updateStats(){
    $("#stats").text("HP: "+ HP+" // Gold: "+ gold+" // Ogres Slain: "+ numDef);
};

function attack(){
    if (HP > 0){
        if (Math.random()*100 > gold) {
            $("#ogres").prepend("<p>You won! + 10 gold.</p>");
            gold+=10;
            numDef+=1
        }
    }
}
function setup() {
    //title
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");
    //stats
    $("body").append("<div><h3>STATS</h3><p id='stats'></p></div>");
    //attack
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");
    //Container for ogre images
    $("body").append("<div id='ogre'></div>");
    updateStats();
};

$(document).ready(setup);