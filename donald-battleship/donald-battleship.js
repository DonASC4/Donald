 var cnv;
var score;

function setup(){
    createCanvas(1200,1200);
    background(100);
};

 var row1 = ["su","su","su","nu","nu","nu"];
var row2  = ["su","nu","nu","su","nu","nu"];
var row3 = ["nu","nu","su","nu","su","nu"];
var row4 = ["nu","su","nu","su","nu","su"];
var row5 = ["su","su","nu","su","nu","nu"];
var row6 = ["nu","nu","su","nu","nu","nu"];

var myBoard = [row1,row2,row3,row4,row5,row6];

    function draw(){
        var score = 0;
        var w = 200;
        var h = 200;
        strokeWeight(10);
        for (i=0; i<myBoard.length; i++){
            for (j=0; j<myBoard.length; j++){
                if (myBoard[i][j] == "nu" || myBoard[i][j] == 'su'){
                    fill(255);
                } else if (myBoard[i][j] == "nc"){
                    fill(0);
                } else if (myBoard[i][j] == "sc"){
                    fill(255,0,0);
                    score++;
                }
                rect(i*w, j*h, w,h)
            }
        }
    };


    












            // var x = 0;
            // var y = 0;
            // var w = 200;
            // var h = 200;
            // rect(x,y,w,h);
            // rect(x,y+200,w,h);
            // rect(x,y+400,w,h);
            // rect(x,y+600,w,h);
            // fill(255);
            // rect(x,y+800,w,h);
            //  x += 200
            // rect(x,y,w,h);
            // rect(x,y+200,w,h);
            // rect(x,y+400,w,h);
            // rect(x,y+600,w,h);
            // rect(x,y+800,w,h);
            //  x += 200
            // rect(x,y,w,h);
            // rect(x,y+200,w,h);
            // rect(x,y+400,w,h);
            // rect(x,y+600,w,h);
            // rect(x,y+800,w,h);
            // x += 200
            // rect(x,y,w,h);
            // rect(x,y+200,w,h);
            // rect(x,y+400,w,h);
            // rect(x,y+600,w,h);
            // rect(x,y+800,w,h);
            //  x += 200
            // rect(x,y,w,h);
            // rect(x,y+200,w,h);
            // rect(x,y+400,w,h);
            // rect(x,y+600,w,h);
            // rect(x,y+800,w,h);

            // rect(x+400,y+400,w,h);
            // rect(x+600,y+600,w,h);
            // rect(x+800,y+800,w,h);