var url = "https://swapi.co/api/"
function randPeople(){
    Math.floor(Math.random()*89)
}

function randPlanet(){
    Math.floor(Math.random()*62)
}

function randStarship(){
    Math.floor(Math.random()*69)
}


var people = url+"people/6/";

$("body").append("<h2>You are "+people+"<h2>");