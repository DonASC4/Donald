var randomURL = "https://randomuser.me/api";
var countryAPI = "https://restcountries.eu/rest/v2/alpha?codes=";

var num1;
var num2;
var num3;
var num4;
var nat;

$.ajax({
    url: randomURL,
    success: function(data){
        myFunction(data);
        var num1 = (data.results[0].dob[0]);
        var num2 = (data.results[0].dob[1]);
        var num3 = (data.results[0].dob[2]);
        var num4 = (data.results[0].dob[3]);
    }
})


function myFunction(data){
        var firstName = (data.results[0].name.first);
        var lastName = (data.results[0].name.last);
        var pic = (data.results[0].picture.large);
        var year = (data.results[0].dob.substring(0,4));
        var age = (2017 - year)
        var nat = (data.results[0].nat);
$('body').append('<h2 class="name">'+firstName+' '+lastName+'</h2>');
$('body').append('<div class="pic"><img class="person" src ='+pic+'></div>');
$('body').append('<h2 class="age">'+age+'</h2>');

    $.ajax({
        url: countryAPI+nat,
        success: function(data){
            locationFunction(data);
        }
    })
}

function locationFunction(data){
    var location = (data[0].name);
    console.log(data[0].name);
    $('body').append('<h2 class="location">'+location+'</h2>');
}
