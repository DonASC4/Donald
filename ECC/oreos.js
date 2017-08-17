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