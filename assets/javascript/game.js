//global variables

//value of crystals each round
var gems = {
    red: {
        value : 0,
        name : `realityStone`
    },
    blue : {
        value : 0,
        name : `spaceStone`
    }, 
    green : {
        value : 0,
        name : `timeStone`
    }, 
    yellow : {
        value : 0,
        name : `mindStone`
    },
    purple: {
        value : 0,
        name : `powerStone`
    }
}
    

//current and target score
var currentScore = 0;
var targetScore= 0;

var randomTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 1; 
var randomGemTotal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//wins and losses
var winTotal = 0;
var lossTotal = 0;

//functions 

var getRandom = function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startgame = function(){
    
    //reset score
    playerScore = 0;
    //set target score
    targetScore = getRandom(19,120);

    //set diff value for crystal
    gems.red.value = getRandom(1,12)
    gems.blue.value = getRandom(1,12)
    gems.green.value = getRandom(1,12)
    gems.yellow.value = getRandom(1,12)

    $("#playerScore").html(currentScore);
    $("#targetscore").html(targetScore);
    //change html to show changes
$("yourScore").html(currentScore);

}
var addValues = function(gems){
    currentScore = currentScore + gems.value;

}
var scoreCheck = function(){
    if(currentScore > targetScore){
        alert("Loser!!!")
        lossTotal++

        $("#lossTotal").html(lossTotal());
        //reset
        startgame()
    }
    else if(currentScore == targetScore){
        alert("You got it!!!")
        winTotal++
        $("#winTotal").html(winTotal());
        
        //reset
        startgame()
    }
}
//main process
startgame()

$(`.red`).onclick(function() {
    alert(`testing`)
});
$(`.blue`).onclick(function(){
    alert(`testing`)
});
$(`.yellow`).onclick(function() {
    alert(`testing`)
});
$(`.green`).onclick(function(){
    alert(`testing`)
});



//games starts

//player continues until displayed number is met or player goes over
//player wins if players total is equal to displayed number
//player loses if players total goes over displayed number

for (var i = 0; i < gems.length; i++)
randomGemTotal(gems[i])
console.log(randomGemTotal(gems[i]))

winLoseIndicator = function(){
    if(totalScore === randomTotal){
        addEventListener('document.querySelector("#irc_cc > div > div:nth-child(2) > div.irc_t.i30052 > div.irc_mic > div.irc_mimg.irc_hic > a > div > img")')
        //add +1 to winScore
        //reset totalScore, randomTotal, gemValue
    }  else if(totalScore < randomTotal){
        //continue adding button value to totalScore
    }
    if(totalScore > randomTotal){
        //add +1 to lossScore
        //reset totalScore, randomTotal, gemValue
    }
}
//player win score / loss score is saved.
//restart           

//The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.    