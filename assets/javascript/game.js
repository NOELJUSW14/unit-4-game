//games starts
//a random number will be displayed to player
randomIndex = Math.floor(Math.random() * total)

//player selects crystals containing number
randomIndex = Math.floor(Math.random() * crystalRed)



//number is added to player's total
winScore = 0;
lossScore = 0;
//player continues until displayed number is met or player goes over
//player wins if players total is equal to displayed number
//player loses if players total goes over displayed number
winLoseIndicator = function(){
    if(totalScore === randomTotal){
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