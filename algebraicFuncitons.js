var prompt = require("prompt-sync")();

    //ask what type of equations needs solved

function equationAsk(){
var ask = prompt("Enter equation type (for available options, enter ls): ")


if (ask == "linear single var both sides"){
    linearEqus();

} else if (ask == "quadratic ax^2 + bx + c"){
    quadratic1Equs();

} else if (ask == "Pythagorean theorem num"){
    PTnum();

} else if (ask == "ls"){
    list();

} else if (ask == "volume cube"){
     vCube();

} else if (ask == "volume rectagular prism"){
    vRect();

} else if (ask == "volume cylinder"){
    vCyl();

} else if (ask == "volume square pyramid"){
    vSP();

} else if (ask == "volume cone"){
    vCone();

} else if (ask == "volume sphere"){
    vSphere();

} else if (ask == "distance between two points"){
    dist();

} else if (ask == "slope"){
    slope();

} else if (ask == "surface area cube"){
    saCube();

} else if (ask == "surface area cylinder lateral"){
    saCylLateral();

} else if (ask == "surface area cylinder base"){
    saCylBase();

} else if (ask == "surface area cylinder"){
    saCyl();

} else if (ask == "area square"){
    aSq();

} else if (ask == "area rectangle"){
    aRect();

} else if (ask == "area parallelogram"){
    aPara();

} else if (ask == "area triangle"){
    aTri();

} else if (ask == "area circle"){
    aCir();

} else if (ask == "area trapezoid"){
    aTrap();

} else if (ask == "area sphere"){
    aSph();

} else if (ask == "perimeter square"){
    pSq();

} else if (ask == "perimeter rectangle"){
    pRect();

} else if (ask == "perimeter triangle"){
    pTri();

} else if (ask == "circumference circle"){
    circCir();

} else if (ask == "linear single var one side"){
    linearEqus2();

} else if (ask == "mean" || ask == "average"){
    mean();

} else if (ask == "range"){
    range();

} else if (ask == "median"){
    median();

} else {
    console.log("equation type invalid");
}
};



function linearEqus(){

    //asks for initial information and coverts inputs to numbers

    var side1x = prompt("Enter coefficient for to x: ");
    var side1xParse = parseInt(side1x);
    var side1Operation1 = prompt("+ , - , * , or /: ");

    var side1num = prompt("Enter any constants: ");
    var side1numParse = parseInt(side1num);

    var side2x = prompt("Enter coefficient for x on the right: ");
    var side2xParse = parseInt(side2x);
    var side2Operation1 = prompt("+ , - , * , or /: ");
    var side2num = prompt("Enter any constants on the right: ");
    var side2numParse = parseInt(side2num);

    //puts information into equation and asks for conformation on correctness

    console.log(side1x+"x "+side1Operation1+" "+side1num+" = "+side2x+"x "+side2Operation1+" "+side2num);

    var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        linearEqus();
    } else if (confirm == "yes"){
    
    //first step of equation (fixed)

        if (side2Operation1 == "-" && side1Operation1 == "+"){
            console.log("step 1, get all constants to the right: "+ (side1xParse - side2xParse));
        } else if (side2Operation1 == "+" && side1Operation1 == "+"){
            console.log("step 1, get all constants to the right: "+ (side2numParse - side1numParse));
        } else if (side2Operation1 == "-" && side1Operation1 == "-"){
            console.log("step 1, get all constants to the right: "+ (-side2numParse + side1numParse));
        } else if (side2Operation1 == "+" && side1Operation1 == "-"){
            console.log("step 1, get all constants to the right: "+ (side2numParse + side1numParse));
        } else if (side2Operation1 == "*" && side1Operation1 == "+"){
            console.log("step 1, get all constants to the right: "+ (side2numParse - side1numParse));
        } else if (side2Operation1 == "+" && side1Operation1 == "*"){
            console.log("step 1, get all constants to the right: "+ (side2numParse / side1numParse));
        } else if (side2Operation1 == "*" && side1Operation1 == "-"){
            console.log("step 1, get all constants to the right: "+ (side2numParse + side1numParse));
        } else if (side2Operation1 == "-" && side1Operation1 == "*"){
            console.log("step 1, get all constants to the right: "+ (-side2numParse / side1numParse));
        } else if (side2Operation1 == "*" && side1Operation1 == "/"){
            console.log("step 1, get all constants to the right: "+ (side2numParse * side1numParse));
        } else if (side2Operation1 == "/" && side1Operation1 == "*"){
            console.log("step 1, get all constants to the right: "+ (side2numParse / side1numParse));
        } else if (side2Operation1 == "+" && side1Operation1 == "/"){
            console.log("step 1, get all constants to the right: "+ (side2numParse * side1numParse));
        } else if (side2Operation1 == "-" && side1Operation1 == "/"){
            console.log("step 1, get all constants to the right: "+ (-side2numParse * side1numParse));
        } else if (side2Operation1 == "/" && side1Operation1 == "-"){
            console.log("step 1, get all constants to the right: "+ (side2numParse + side1numParse));
        } else if (side2Operation1 == "*" && side1Operation1 == "*"){
            console.log("step 1, get all constants to the right: "+ (side2numParse / side1numParse));
        } else if (side2Operation1 == "/" && side1Operation1 == "/"){
            console.log("step 1, get all constants to the right: "+ (side2numParse * side1numParse));
        } else if (side2Operation1 == "/" && side1Operation1 == "+"){
            console.log("step 1, get all constants to the right: "+ (side2numParse - side1numParse));
        }

    // second step of equation

        if (side1xParse > 0 && side2xParse > 0){
            console.log("step 2, get all x values to the left: "+ (side1xParse - side2xParse));
        } else if (side1xParse < 0 && side2xParse > 0){
            console.log("step 2, get all x values to the left: "+ (-side1xParse - side2xParse));
        } else if (side1xParse < 0 && side2xParse < 0){
            console.log("step 2, get all x values to the left: "+ (-side1xParse + side2xParse));
        } else if (side1xParse > 0 && side2xParse < 0){
            console.log("step 2, get all x values to the left: "+ (side1xParse - side2xParse));
        }

    // final answer

         if (side2Operation1 == "-" && side1Operation1 == "+" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side1xParse - side2xParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "+" && (side1xParse > 0 && side2xParse > 0)){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "-" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side2numParse + side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "-" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "+" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "*" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "-" &&  side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "*" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "/" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "*" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "/" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "/" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "-" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) /  (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "*" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "/" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "+" && side1xParse > 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (side1xParse - side2xParse)));
        }

    
         if (side2Operation1 == "-" && side1Operation1 == "+" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side1xParse - side2xParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "+" && (side1xParse < 0 && side2xParse > 0)){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "-" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side2numParse + side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "-" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "+" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "*" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "-" &&  side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "*" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side2numParse / side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "/" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "*" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "/" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "/" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((-side2numParse * side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "-" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) /  (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "*" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "/" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (-side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "+" && side1xParse < 0 && side2xParse > 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (-side1xParse - side2xParse)));
        }


         if (side2Operation1 == "-" && side1Operation1 == "+" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side1xParse - side2xParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "+" && (side1xParse < 0 && side2xParse < 0)){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "-" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((-side2numParse + side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "-" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "+" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "*" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "-" &&  side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "*" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((-side2numParse / side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "/" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "*" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "/" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "/" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((-side2numParse * side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "-" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) /  (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "*" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "/" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (-side1xParse + side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "+" && side1xParse < 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (-side1xParse + side2xParse)));
        }
        
       
        if (side2Operation1 == "-" && side1Operation1 == "+" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side1xParse - side2xParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "+" && (side1xParse > 0 && side2xParse < 0)){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "-" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((-side2numParse + side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "-" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "+" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "*" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "-" &&  side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "*" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((-side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "/" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "*" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "+" && side1Operation1 == "/" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "-" && side1Operation1 == "/" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((-side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "-" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse + side1numParse) /  (side1xParse - side2xParse)));
        } else if (side2Operation1 == "*" && side1Operation1 == "*" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse / side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "/" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse * side1numParse) / (side1xParse - side2xParse)));
        } else if (side2Operation1 == "/" && side1Operation1 == "+" && side1xParse > 0 && side2xParse < 0){
            console.log("final answer: x = "+ ((side2numParse - side1numParse) / (side1xParse - side2xParse)));
        }
    }
}



    //quadratic equation function

    function quadratic1Equs(){

        //asks for inital info

        var a = prompt("Enter constant for a: ");
        var aParse = parseInt(a);

        var operation1 = prompt("+ , - , * , or /: ");

        var b = prompt("Enter constant for b: ");
        var bParse = parseInt(b);

        var operation2 = prompt("+, - , * , or /: ");

        var c = prompt("Enter constant for c: ");
        var cParse = parseInt(c);
        
        //logs inputs and asks for confirmation

        console.log(a+"x^2 "+operation1+ " "+b+"x "+operation2+" "+c+" = 0");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        quadratic1Equs();
    } else if (confirm == "yes"){
        var case1 = (-1 * bParse + Math.sqrt(Math.pow(bParse, 2) - (4 * aParse * cParse))) / (2 * aParse);

        var case2 = (-1 * bParse - Math.sqrt(Math.pow(bParse, 2) - (4 * aParse * cParse))) / (2 * aParse);

        //If inputs = correct, logs final answer

        console.log("final answer: x = "+case1+" or "+case2);
    }
    }

        //Pythagorean theorem (numbers only) function

    function PTnum(){

        //initial info 

        var a2 = prompt("Enter constant for a: ");
        var aParse2 = parseInt(a2);

        var b2 = prompt("Enter constant for b: ");
        var bParse2 = parseInt(b2);

        //log inputs and confirmation

        console.log(a2+"^2 + "+b2+"^2 = "+"c");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        PTnum();
        
        //logs final answer if yes

    } else if (confirm == "yes"){
        console.log("final answer: c = "+ Math.sqrt(Math.pow(aParse2, 2)+(Math.pow(bParse2, 2))));
    }
    };

        //volume of cube function

    function vCube(){

        // inital info

        var a3 = prompt("Enter constant for a (edge): ");
        var aParse3 = parseInt(a3);

        //logs and asks for confirmation
         
        console.log(a3+"^3 = V");
        
         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        vCube();
    } else if (confirm == "yes"){

        //give final answer if yes

        console.log("final answer: V = "+ Math.pow(aParse3, 3));
    }
    };

        //volume of rectangle function

    function vRect(){
        var l = prompt("Enter value for length: ");
        var lParse = parseInt(l);

        var w = prompt("Enter value for width: ");
        var wParse = parseInt(w);

        var h = prompt("Enter value for height: ");
        var hParse = parseInt(h);

        console.log(l+" * "+w+" * "+h+" = V");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        vRect();
    } else if (confirm == "yes"){
        console.log("final answer: V = "+lParse*wParse*hParse);
    }
    };

    function vCyl(){
        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        var h = prompt ("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("pi * "+rad+"^2 * "+h);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        vCyl();
    } else if (confirm == "yes"){
        console.log("final answer: V = "+ (Math.PI * Math.pow(radParse, 2) * hParse)+ " or "+ (Math.PI * Math.pow(radParse, 2) * hParse) / Math.PI +"pi ");
    }
    };

    function vSP(){
        var b = prompt("Enter value for base: ");
        var bparse = parseInt(b);

        var h = prompt("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("1/3 * "+b+"^2 * "+h);

         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        vSP();
    } else if (confirm == "yes"){
        console.log("Final answer: V = "+(1/3*(Math.pow(bparse, 2)*hParse)));
    }
    };

    function vCone(){
        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        var h = prompt ("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("1/3 * pi "+rad+"^2 * "+h);
        
         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        vCone();
    } else if (confirm == "yes"){
        console.log("Final answer: V = "+ (1/3 * Math.PI * Math.pow(radParse, 2) * hParse));
    }
    };
    
    function vSphere(){
        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        console.log("4/3 * pi * "+rad+"^3");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        vSphere();
    } else if (confirm == "yes"){
        console.log("Final answer: V = "+(4/3 * Math.PI * Math.pow(radParse, 3)));
    }
    };

    function dist(){
        var x1 = prompt("Enter the value for x1: ");
        var x1Parse = parseInt(x1);

        var x2 = prompt("Enter the value for x2: ");
        var x2Parse = parseInt(x2);
        
        var y1 = prompt("Enter the value for y1: ");
        var y1Parse = parseInt(y1);

        var y2 = prompt("Enter the value for y2: ");
        var y2Parse = parseInt(y2);

        console.log("square root of: "+"("+x2+" - "+x1+")^2"+" + ("+y2+" - "+y1+")^2");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        dist();
    } else if (confirm == "yes"){
        console.log("Final answer: "+ Math.sqrt(Math.pow((x2Parse - x1Parse), 2) + Math.pow((y2Parse - y1Parse), 2))+" units");
    }
    };

    function slope(){
        var x1 = prompt("Enter the value for x1: ");
        var x1Parse = parseInt(x1);

        var y1 = prompt("Enter the value for y1: ");
        var y1Parse = parseInt(y1);
        
        var x2 = prompt("Enter the value for x2: ");
        var x2Parse = parseInt(x2);

        var y2 = prompt("Enter the value for y2: ");
        var y2Parse = parseInt(y2);

        console.log(" m = ("+y2+" - "+y1+")"+" / ("+x2+" - "+x1+")");

         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        dist();
    } else if (confirm == "yes"){
        console.log("Final answer: m = "+ ((y2Parse - y1Parse) / (x2Parse - x1Parse)));
    }
    };

    function saCube(){
        var s = prompt("Enter value for s (side): ");
        var sParse = parseInt(s);

        console.log("SA = 6 * "+s+"^2");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        saCube();
    } else if (confirm == "yes"){
        console.log("Final answer: SA = "+ 6 * Math.pow(sParse, 2));
    }
    };

    function saCylLateral(){
        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        var h = prompt ("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("SA = 2 * pi * "+rad+" * "+h);
        
         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        saCylLateral();
    } else if (confirm == "yes"){
        console.log("Final answer: SA = "+ (2 * Math.PI * radParse * hParse));
    }
    };

     function saCylBase(){
        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        console.log("SA = 2 * pi * "+rad+"^2 ");
        
         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        saCylBase();
    } else if (confirm == "yes"){
        console.log("Final answer: SA = "+ (2 * Math.PI * Math.pow(radParse, 2)));
    }
    };    

    function saCyl(){
        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        var h = prompt ("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("SA = (2 * pi * "+rad+" * "+h+") + (2 * pi "+rad+"^2) ");
        
         var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        saCyl();
    } else if (confirm == "yes"){
        console.log("Final answer: SA = "+((2 * Math.PI * radParse * hParse) + (2 * Math.PI * Math.pow(radParse, 2))));
    }
    };

    function aSq(){
        var s = prompt("Enter value for s (side): ");
        var sParse = parseInt(s);

        console.log("A = "+s+"^2");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aSq();
    } else if (confirm == "yes"){
        console.log("Final answer: A = "+ Math.pow(sParse, 2));
    }
    };

    function aRect(){
        var l = prompt("Enter value for length: ");
        var lParse = parseInt(l);

        var w = prompt("Enter value for width: ");
        var wParse = parseInt(w);

        console.log("A = "+(l+" * "+w));

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aRect();
    } else if (confirm == "yes"){
        console.log("Final answer: A = "+ (lParse*wParse));
    }
    };

    function aPara(){
        var b = prompt("Enter value for base: ");
        var bParse = parseInt(b);

        var h = prompt("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("A = "+b+" * "+h);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aPara();
    } else if (confirm == "yes"){
        console.log("Final answer: A = "+ (bParse*hParse));
    }
    };

    function aTri(){
        var b = prompt("Enter value for base: ");
        var bParse = parseInt(b);

        var h = prompt("Enter value for height: ");
        var hParse = parseInt(h);

        console.log("A = 1/2 * "+b+" * "+h);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aTri();
    } else if (confirm == "yes"){
        console.log("Final answer: A = "+ ((1/2 * bParse) * hParse));
    }
    };

    function aCir(){

        //initial info

        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        //logs inputs, confirms if correct

        console.log("A = pi * "+rad+"^2");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aRect();

        //if yes, logs final answer

    } else if (confirm == "yes"){
        console.log("Final answer: A = "+ Math.PI * Math.pow(radParse, 2));
    }
    };

    function aTrap(){

        //initial info

        var b1 = prompt("Enter value for b1: ");
        var b1Parse = parseInt(b1);

        var b2 = prompt("Enter value for b2: ");
        var b2Parse = parseInt(b2);

        var h = prompt("Enter value for height: ");
        var hParse = parseInt(h);

        //logs inputs, confirms if correct

        console.log("A = 1/2 * ("+b1+" + "+b2+") * "+h);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aTrap();

        //logs final answer if yes

    } else if (confirm == "yes"){
        console.log("Final answer: A = "+ (1/2 * (b1Parse + b2Parse) * hParse));
    }
    };

    function aSph(){

        //initial info

        var rad = prompt("Enter value for radius: ");
        var radParse = parseInt(rad);

        //logs inputs, confirms if correct

        console.log("A = 4 * pi * "+rad+"^2");

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        aSph();

        //if yes, logs final answer

    } else if (confirm == "yes"){
        console.log("Final answer: SA = "+ 4 * Math.PI * Math.pow(radParse, 2));
    }
    };

    function pSq(){

        //initial info

        var s = prompt("Enter value for s (side): ");
        var sParse = parseInt(s);

        //logs input, checks for correctness

        console.log("P = 4 * "+s);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        pSq();

        //if yes, logs final answer

    } else if (confirm == "yes"){   
        console.log("Final answer: P = "+ 4 * sParse);
    }
    };

    function pRect(){

        //initial info

        var l = prompt("Enter value for length: ");
        var lParse = parseInt(l);

        var w = prompt("Enter value for width: ");
        var wParse = parseInt(w);

        //logs inputs, checks correctness

        console.log("P = 2 * "+l+" + 2 * "+w);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        pRect();

        //if yes, logs final answer

    } else if (confirm == "yes"){   
        console.log("Final answer: P = "+ (2*lParse + 2*wParse));
    }
    };

    function pTri(){

        //initial info

        var s1 = prompt("Enter value for s1: ");
        var s1Parse = parseInt(s1);

        var s2 = prompt("Enter value for s2: ");
        var s2Parse = parseInt(s2);

        var s3 = prompt("Enter value for s3: ");
        var s3Parse = parseInt(s3);

        //log inputs, checks correctness

        console.log("P = "+s1+" + "+s2+" + "+s3);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        pTri();

        //if yes, logs final answer

    } else if (confirm == "yes"){   
        console.log("Final answer: P = "+ (s1Parse + s2Parse+ s3Parse));
    }
    };

    function circCir(){

        //initial info

        var d = prompt("Enter value for diameter: ");
        var dParse = parseInt(d);

        //logs inputs, checks correctness

        console.log("C = pi * "+d);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        circCir();

        //if yes, logs final answer

    } else if (confirm == "yes"){
        console.log("Final answer: C = "+ (Math.PI * d));
    }
    };

    function linearEqus2(){
        
        //initial info

        var side1x = prompt("Enter coefficient for x: ");
        var side1xParse = parseInt(side1x);

        var operation1 = prompt("+, - , * , or /: ");
        var side1num = prompt("Enter constant on left: ");
        var side1numParse = parseInt(side1num);

        var side2num = prompt("Enter constant on right: ");
        var side2numParse = parseInt(side2num);

        //logs inputs, checks correctness

        console.log(side1x+"x "+operation1+" "+side1num+" = "+side2num);

        var confirm = prompt("is this correct? ");

    if (confirm == "no"){
        pTri();

        //if yes, logs final answer

    } else if (confirm == "yes"){   
        if (operation1 == "+" && side2num > 0){
            console.log("step 1, get all constants to right side: "+side1x+"x = "+(side2numParse - side1numParse));

            console.log("Final answer: x = "+ ((side2numParse - side1numParse) / side1xParse));

        } else if (operation1 == "+" && side2num < 0){
            console.log("step 1, get all constants to the right side: "+side1x+"x = "+(-side2numParse - side1numParse));

            console.log("Final answer: x = "+ ((-side2numParse - side1numParse) / side1xParse));

        } else if (operation1 == "-" && side2num > 0){
            console.log("step 1, get all constants to right side: "+side1x+"x = "+(side2numParse + side1numParse));

            console.log("Final answer: x = "+ ((side2numParse + side1numParse) / side1xParse));

        } else if (operation1 == "-" && side2num < 0){
            console.log("step 1, get all constants to the right side: "+side1x+"x = "+(-side2numParse + side1numParse));

            console.log("Final answer: x = "+ ((-side2numParse + side1numParse) / side1xParse));

        } else if (operation1 == "*" && side2num > 0){
            console.log("step 1, get all constants to right side: "+side1x+"x = "+(side2numParse / side1numParse));

            console.log("Final answer: x = "+ ((side2numParse / side1numParse) / side1xParse));

        } else if (operation1 == "*" && side2num < 0){
            console.log("step 1, get all constants to the right side: "+side1x+"x = "+(-side2numParse / side1numParse));

            console.log("Final answer: x = "+ ((-side2numParse / side1numParse) / side1xParse));

        } else if (operation1 == "/" && side2num > 0){
            console.log("step 1, get all constants to right side: "+side1x+"x = "+(side2numParse * side1numParse));

            console.log("Final answer: x = "+ ((side2numParse * side1numParse) / side1xParse));

        } else if (operation1 == "/" && side2num < 0){
            console.log("step 1, get all constants to the right side: "+side1x+"x = "+(-side2numParse * side1numParse));

            console.log("Final answer: x = "+ ((-side2numParse * side1numParse) / side1xParse));

        }

    }
    };

    function mean(){

        //initial info

        //places numbers entered into array, converts from strings to numbers
        var a = prompt("Enter number set (separate numbers with commas): ").split(",");
        var aConvert = a.map(Number);

        //averages the data
        var avg = aConvert.reduce(function(a, b) { return a + b; }, 0) / a.length;

        //logs the result;
        console.log("Final answer: mean = "+ avg);

    };

    function range(){

        //initial info

        //places numbers entered into array, converts from strings to numbers
        var a = prompt("Enter number set (separate numbers with commas): ").split(",");
        var aConvert = a.map(Number);

        //finds & stores biggest number
        var biggest = Math.max.apply(Math, aConvert);

        //finds and stores smallest number
        var smallest = Math.min.apply(Math, aConvert);

        //logs difference between biggest and smallest number
        console.log("Final answer: range = "+ (biggest - smallest));
        
    };

    function median(){
        
        //initial info

        //places numbers entered into array, converts from strings to numbers
        var a = prompt("Enter number set (separate numbers with commas): ").split(",");
        var aConvert = a.map(Number);

        //gets middle number depending on array length
        var middleOdd = aConvert[Math.floor(aConvert.length / 2)];
        var middleEven = aConvert[Math.floor((aConvert.length - 1) / 2)];
        
        //logs result
        if (aConvert.length % 2 == 1){
            console.log(middleOdd);

        } else if (aConvert.length % 2 == 0){
            console.log(middleEven);

        }
    };


    function list(){
        var types = ["linear single var both sides", "quadratic ax^2 + bx + c", "pythagorean theorem num", "volume cube", "volume rectangular prism", "volume cylinder","volume square pyramid","volume cone","volume sphere","distance between two points","slope","surface area cube","surface area cylinder lateral","surface area cylinder base","surface area cylinder","area square","area rectangle","area parallelogram","area triangle","area circle","area trapezoid","area sphere","perimeter square","perimeter rectangle","perimeter triangle","circumference circle","linear single var one side","mean","range","median"];

        for (i=0; i<types.length; i++){
            console.log(types[i]);
        }

        console.log(types.length+" available options ");

    //restarts inital function after listing possible inputs

        equationAsk();
    };


equationAsk();
