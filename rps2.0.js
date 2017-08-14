function rand(number){
    return (Math.floor(Math.random()*number));
};

function compChoice(){
    if (rand(3) == 0){
        return("rock");
    } else if (rand(3) == 1){
        return("paper");
    } else if (rand (3) == 2){
        return("scissors");
    } else {
        return ("scissors");
    }
};


