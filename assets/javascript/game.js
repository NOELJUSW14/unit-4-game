//global variables

//value of crystals each round
var gems = {
    ruby: {
        value : 0,
        name : `realityStone`
    },
    diamond : {
        value : 0,
        name : `spaceStone`
    }, 
    emerald : {
        value : 0,
        name : `timeStone`
    }, 
    yellow : {
        value : 0,
        name : `mindStone`
    }
}
    

//current and target score
playerScore = 0;
givenTotalScore = 0;

randomTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 1; 

//wins and losses
var winTotal = 0;
var lossTotal = 0;

//functions 

randomGemTotal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

valueCreator = function(){

}
$('#blue').click(function{
    alert(welcome)
})

//main process

//games starts
alert('Game on')

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