$(document).ready(function(){

    // Single click → Red
    $("#colorBtn").click(function(){

        $("#colorBox").css(
            "background-color",
            "red"
        );

    });

    // Double click → White
    $("#colorBtn").dblclick(function(){

        $("#colorBox").css(
            "background-color",
            "white"
        );

    });

});