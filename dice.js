var rand = function(number){
    return Math.floor(Math.random()*number);
}
for (i=0; i<7; i++){
if (rand(2) == 0){
    console.log("false");
} else if (rand(2) == 1){
    console.log("true");
}
};
