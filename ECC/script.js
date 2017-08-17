$(document).ready(function() {
    $("#search").click(function() {
        var boxVal = ($("#box").val());
        if (boxVal == "Double stuff oreos" || boxVal == "Kroger Double-Filled Kid O's Cookies") {
            $('#search').click(function() {
                window.location.href = './oreos.html';
                return false;
            })
        } else if (boxVal == "Pampers" || boxVal == "Walmart brand diapers (Parent's choice)") {
            $('#search').click(function() {
                window.location.href = './pampers.html';
                return false;
            })
        } else {
            console.log(boxVal);
        }
    })
})

//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.')
            //setting back to default
        $(".email").text("");
    });
};