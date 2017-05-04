$(document).ready(function() {
    
    $("#submit").click(function(){
        alert("hello");
        var name = $("#input").val();
       // var part1 = "./quotes.json";
        //var response =
       //{"quoteText":"We can change our lives. We can do, have, and be exactly what we wish.  ", "quoteAuthor":"Tony Robbins ", "senderName":"", "senderLink":"", "quoteLink":"http://forismatic.com/en/88061ce065/"}



//;
        
        $.getJSON("quotes.json",function(response) {
            console.log(response);
            // for (var i = 0; i < response.length; i++) {
            //     var info = response[i].quoteText;
            //     alert(info);
            //     var quotesInfo = "<p>" + info;
            //     $("#inspirations").append(quotesInfo);
        
                
            // }
            var random = Math.round(Math.random()) //needs to relate to response.length
         var info = response[random].quoteText;
               
               $("#inspirations").text(info);
            
       });
        
    });
});
    
