function dice(){
    console.log(Math.floor(Math.random()*6));
};

function coinFlip(){
    var HeadorTail = (Math.floor(Math.random()*2+1));
    if (HeadorTail == 1){
        console.log("Heads");
    } else if (HeadorTail == 2){
        console.log("Tails");
    } else {
        console.log("error, error!")
    }
};

coinFlip();