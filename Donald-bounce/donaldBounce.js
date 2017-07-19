function setup(){
    createCanvas(600,600);
    xSpeed = random(-2,2);
    ySpeed = random(-2,2);
    vSpeed = random(-2,2);
    wSpeed = random(-2,2);

};
var x = 250;
var y = 250;
var xSpeed;
var ySpeed;
var v = 250;
var w = 250;
var vSpeed;
var wSpeed;
function draw(){
    background(100);
    fill(0);
    ellipse(x,y,50,50);
    fill(255);
    ellipse(v,w,50,50);
     x += xSpeed;
    y += ySpeed;
     v += vSpeed;
    w += wSpeed;

    if (x>=575){
        xSpeed = -1;
    } else if (x<=25){
        xSpeed = +1;
    }
    if (y>=575){
        ySpeed = -1;
    } else if (y<=25){
        ySpeed = +1;
    }
    x+=xSpeed;
    y+=ySpeed;

     if (v>=575){
        vSpeed = -0.5;
    } else if (v<=25){
        vSpeed = +70;
    }
    if (w>=575){
        wSpeed = -0.5;
    } else if (w<=25){
        wSpeed = +70;
    }
    v+=vSpeed;
    w+=wSpeed;
};