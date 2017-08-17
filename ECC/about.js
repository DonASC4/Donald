$(document).ready(function() {
    $("#search").click(function() {
        var boxVal = ($("#box").val());
        if (boxVal == "Double stuff oreos") {
            $('#search').click(function() {
                window.location.href = './oreos.html';
                return false;
            })
        } else if (boxVal == "Pampers") {
            $('#search').click(function() {
                window.location.href = './pampers.html';
                return false;
            })
        }
    })
})