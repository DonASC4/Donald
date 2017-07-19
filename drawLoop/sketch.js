function setup(){
    createCanvas(600,600);
};

 var x = 0;
 var y = 0;

function draw(){
    background(100);
    //fill(random(255),random(255),random(255));
    fill(200,0,0);
    ellipse(x,y,100,100);
    x++;
    y++;
};