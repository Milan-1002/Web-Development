
 let buttonColors = ["red", "blue", "green", "yellow"]
let randomChosenColors
let gamePattern = []

function flashElement(selector){
    $(selector).fadeOut(100).fadeIn(100);
}

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4)
    //console.log(randomNumber)
    randomChosenColors = buttonColors[randomNumber]
     $('.btn').each(function(){
    let btnId = $(this).attr('id');
    if(randomChosenColors === btnId){
        flashElement("#btnId");
    }
  });

    gamePattern.push(randomChosenColors)
}




nextSequence();