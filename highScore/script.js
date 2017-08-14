var choices = ["rock","paper","scissors"];

function rand(){
    return Math.floor(Math.random()*3);
}
function compChoice(){
    if (rand() == 0){
    console.log(choices[0]);
} else if (rand() == 1){
    console.log(choices[1]);
} else if (rand() == 2){
    console.log(choices[2]);
}
};

compChoice();



