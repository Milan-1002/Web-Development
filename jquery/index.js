// $("h1").css("color","red");
// $("h1").text("My name is Milan");

// Adding Event Listener using JQuery

// $("h1").click(function(){
//     $("h1").css("color","purple");
// });


// using Jquery we can select multiple element at onece
$("button").click(function(){
    $("h1").css("color","purple")
});


$(document).keypress(function(event){
    $("h1").text(event.key)
})