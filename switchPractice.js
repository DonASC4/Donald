var text;
var prompt = ('prompt-sync')();
var fruits = prompt("What is your favorite?");

switch(fruits) {
    case "Banana":
        text = "Bananas are good!";
        break;
    case "Orange":
        text = "I am not a fan of oranges.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
}
