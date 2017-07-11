//var myName = function(name) {
  //  return("Hi, my name is "+ name)
//};
//console.log(myName("Donald"));
//console.log(myName("Prof. D"));

var rps = function(word) {
    if (word = "rock") {
        return("Draw game.");
    } else  if (word = "scissors") {
        return("You lose!");
} else { (word = "paper")  
        return("You win!")
    }  
};
 console.log(rps("paper"));

var greet = function(time) {
    if (time >= 12) {
        return("Good afternoon"); 
    } else if (time <= 11) {
        return("Good Morning")
    } else {
        return("Good night")
    }
};
console.log(greet(11));