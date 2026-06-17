$(document).ready(function(){

    // click()
    $("#box").click(function(){
        $(this).css(
            "background-color",
            "yellow"
        );

        $(this).text(
            "Single Clicked!"
        );
    });

    // dblclick()
    $("#box").dblclick(function(){
        $(this).css(
            "background-color",
            "green"
        );

        $(this).text(
            "Double Clicked!"
        );
    });

    // mouseenter()
    $("#box").mouseenter(function(){
        $(this).css(
            "background-color",
            "orange"
        );

        $(this).text(
            "Mouse Entered"
        );
    });

    // mouseleave()
    $("#box").mouseleave(function(){
        $(this).css(
            "background-color",
            "lightblue"
        );

        $(this).text(
            "Mouse Left"
        );
    });

    // keypress()
    $("#name").keypress(function(){

        $("#message").text(
            "Key Pressed!"
        );
    });

});