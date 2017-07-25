function setup(){
    createCanvas(800,800);
}

var score = 0;
var x = 350;
var y = 625;
var row1 = ["su","su","su","su","su","su"];
var row2  = ["su","nu","su","su","su","su"];
var row3 = ["nu","nu","su","nu","su","nu"];
var row4 = ["nu","su","nu","su","nu","su"];
var row5 = ["su","su","nu","su","nu","nu"];
var row6 = ["nu","nu","su","nu","nu","nu"];

var invaders = [row1,row2,row3,row4,row5,row6];

function Enemies(shape,x,y,hit,w,h) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.hit = hit;
};
var w = 50;
var h = 50;
var counter = 0;
var projArray = [];
function draw() {

    background(0);

counter ++ 
if(counter >= frameRate()){
    if (keyIsDown(32)){
         projArray.push(new Projectile(x, y, true))
    counter = 0 
    }
}
 

    var a1 = new Enemies('rect',80,0,w,h);
    var a2 = new Enemies('ellipse',80,125,w,h);
    var a3 = new Enemies('ellipse',80,250,w,h);
    var a4 = new Enemies('rect',80,375,w,h);

    if (keyIsDown(LEFT_ARROW)){
        x-=5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x+=5;
    }

    // clear();
    fill(250,0,0);
    rect(x,y,30,30);
    strokeWeight(5);
    fill(255);

    for (i=1; i<8; i++){
        if (a1.shape == "rect"){
            a1.shape == rect(i*80,0,w,h);
            a1.shape;
        }
        if (a3.shape == "ellipse"){
            a3.shape == ellipse(i*80,a2.y,w,h);
            a3.shape;
        }
        if (a4.shape == 'rect'){
            a3.shape == rect(i*80,200,w,h)
        }
          if (a3.shape == "ellipse"){
            a3.shape == ellipse(i*80,325,w,h);
            a3.shape;
        }
    }

    function Projectile(x,y,isActive){
        this.x = x
        this.y = y
        this.isActive = isActive
    }
}

//     var w = 50;
//     var h = 50;
//     for (i=0; i<invaders.length; i++){
//         for (j=0; j<invaders.length; j++){
//                 if (invaders[i][j] == "nu" || invaders[i][j] == 'su'){
//                     fill(255);
//                 } else if (invaders[i][j] == "nc"){
//                     fill(0);
//                 } else if (invaders[i][j] == "sc"){
//                     fill(255,0,0);
//                     score++;
//                 }
//                 rect(i*w, j*h, w,h)
// }
//     }

