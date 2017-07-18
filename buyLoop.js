var prompt = require('prompt-sync')();
var money = 1000;
var items = [];

while (money > 50){
    console.log("You have $" + money + " left. Shirt = $50, Computer = $500, Sword = $200, Human Heart = $700, Coding lessons = $100");
    var answer = prompt("Which item whould you like to buy? ");
    if (answer == "Shirt"){
        money -= 50;
        items.push("Shirt");
        console.log("You bought a shirt");
        console.log("You have: " +items);
    } else if (answer == "Computer"){
        money -= 400;
        items.push("Computer");
        console.log("You bought a Computer");
        console.log("You have: " +items);
    } else if (answer == "Sword"){
        money-=200
        items.push("Sword");
        console.log("You bought a Sword.");
        console.log("You have: " +items);
    } else if (answer == "Human Heart"){
        money-=700
        items.push("Human Heart");
        console.log("You bought an organ illegally on the black market.");
        console.log("You have: " +items);
    } else if (answer == "Coding lessons"){
        money-=100
        items.push("Coding lessons")
        console.log("You bought Coding lessons.");
        console.log("You have: " +items);
    } else {
        console.log("Sir, im trying to run a buisness here. Either buy something or get out!");
        console.log("You have: "+items);
    }
};
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');


// var counter = 1;
// while (counter > 11){
//     console.log(counter);
//     counter++;
// }

        // console.log("Sir, im trying to run a buisness here. Either buy something or get out!")
        // console.log("You have: "+items);
