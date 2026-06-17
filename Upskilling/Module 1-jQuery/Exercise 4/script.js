$(document).ready(function(){

    $("#myForm").submit(function(event){

        event.preventDefault();

        let value = $("#item").val();

        if(value != "")
        {
            $("#myList").append(
                "<li>" + value + "</li>"
            );

            $("#item").val("");
        }

    });

    $("#removeBtn").click(function(){

        $("#myList").empty();

    });

});