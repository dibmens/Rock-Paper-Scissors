function roll(d){
    return Math.max(1, Math.trunc(Math.random()*d+1));
  }
  
  function rollRockPaperScissors(hand = roll(3)){
      switch(hand){
          case 1: return `Rock` ;
          break;
          case 2: return `Paper`;
          break;
          case 3: return `Scissors`;
          break;
      }
    
  }
  
  function playGame(){
      
      let rawHand;
      let playHand;
      let compHand; 
      let playScore = 0;
      let compScore = 0;
    
    while(playScore < 3 && compScore < 3){
      compHand = rollRockPaperScissors();
          rawHand = prompt(`What is your hand?`,``);
          playHand = rawHand.slice(0,1).toUpperCase() + rawHand.slice(1).toLowerCase();
      
      if (playHand == `Rock` && compHand == `Scissors` || playHand == `Paper` && compHand == `Rock` || playHand == `Scissors` && compHand == `Paper`){
        playScore += 1; 
        console.log(`You ${playHand} beats my ${compHand}, you win!`);
  
      } else if (playHand == `Rock` && compHand == `Paper` || playHand == `Paper` && compHand == `Scissors` || playHand == `Scissors` && compHand == `Rock`){
        compScore += 1;
        console.log(`My ${compHand} beats your ${playHand}, you lose!`) ;
  
      } else if (playHand == compHand) {
          console.log(`We both draw with ${playHand}! Let's play again!`);
      } else {
          console.log(`Sorry, that's not a Rock, Paper or Scissors, try again!`);
      }
      }
    
        if (playScore == 3){
          console.log(`Congratulations! You WIN with a score of ${playScore} vs ${compScore}!`);
      } else if (compScore == 3){
          console.log(`Too bad! You LOSE With a score of ${playScore} vs ${compScore}!`);
      }
  }