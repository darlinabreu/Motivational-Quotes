$(document).ready(function() {
    $("#clear").click(function() {
        $("#inspirations").empty();
    });
    $("#submit").click(function() {

        var name = $("#input").val();


        $.getJSON("quotes.json", function(response) {

            var random = Math.floor(Math.random() * response.length); //needs to relate to response.length

            var info = response[random].quoteText;

            $("#inspirations").text(info);



        });
        var searchVal = $("#input").val();
        var part1 = "https://api.giphy.com/v1/gifs/random?&tag=cute-baby-animals";
        var part2 = "&api_key=dc6zaTOxFJmzC&limit=1&rating=pg";
        var url = part1 + part2;

        $.getJSON(url, function(response) {
            var imgUrl = response.data.image_original_url;
            var img = "<img src ='" + imgUrl + "'/>";
            $("#inspirations").append(img);
           
        });
    });
});
