// var Message = function(){
//     console.log('You should hire me someday!!!');
// }
// Message();

var prompt = require('prompt-sync')();

var alphbetArray = "abcdefghijklimopqrstuvwxyz";
var key = 3;
var newMessage = "";

function encrypt(){
    var  message = prompt("Enter a message: ");
    var message = character

        var position = alphbetArray.indexOf(character);
        var newPosition = (position + key) % 26;
        var newCharacter = alphbetArray[newPosition];
        console.log(newCharacter);
    };
encrypt();