  
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let game = document.querySelector('#game');
let score = document.querySelector('#score');

let hand = [`ROCK`, `PAPER`, `SCISSORS`];
let userScore = 0;
let compScore = 0;

rock.addEventListener('click', ()=> playGame(hand[0]));
paper.addEventListener('click', ()=> playGame(hand[1]));
scissors.addEventListener('click', ()=> playGame(hand[2]));

 
function playGame(user){

  let comp = hand[Math.trunc(Math.random()*3)];

  if ( user == comp ){
    score.textContent = `It's a draw! Play again!`;
  } else if ( user == hand[0] && comp == hand[1] || user == hand[1] && comp == hand[2] || user == hand[2] && comp == hand[0] ) {
    score.textContent = `My ${comp} beats your ${user}!`;
    compScore += 1;
  } else if ( user == hand[0] && comp == hand[2] || user == hand[1] && comp == hand[0] || user == hand[2] && comp ==[1]) {
    score.textContent = `Your ${user} beats my ${comp}!`;
    userScore += 1;
  }

  game.textContent = `CURRENT SCORE: ${userScore} VS ${compScore}`;

  if ( userScore == 3 || compScore == 3 ){
    if ( userScore > compScore){
      alert(`CONGRATS! You won ${userScore} to ${compScore}!`);
    } else if ( userScore < compScore){
      alert(`TOUGH LUCK! You lose ${userScore} to ${compScore}! Better luck next time!`);
    }
    userScore = 0;
    compScore = 0;
    game.textContent = `PLAY AGAIN!`;
    score.textContent = `BEST OF 5 WINS`;
  }

  

}



// function playGame(hand){
      
//     let comp = rollComp(); 
//     let playScore = 0;
//     let compScore = 0;
//     let hando = hand;
  
//   while(playScore < 3 && compScore < 3){
    
//     if (hando == `Rock` && comp == `Scissors` || hando == `Paper` && comp == `Rock` || hando == `Scissors` && comp == `Paper`){
//       playScore += 1; 
//       score.textContent = `Your ${hando} beats my ${comp}, you win!`;

//     } else if (hando == `Rock` && hando == `Paper` || hando == `Paper` && hando == `Scissors` || hando == `Scissors` && comp == `Rock`){
//       compScore += 1;
//       score.textContent = `My ${comp} beats your ${hando}, you lose!`;

//     } else if (hando == comp) {
//         score.textContent = `We draw ${hando}! Again!`;
//     } 
//   }
  
//       if (playScore == 3){
//         console.log(`Congratulations! You WIN with a score of ${playScore} vs ${compScore}!`);
//     } else if (compScore == 3){
//         console.log(`Too bad! You LOSE With a score of ${playScore} vs ${compScore}!`);
//     }
// }



// --- OLD PROMPT VERSION ---

  // function playGame(){
      
  //     let rawHand;
  //     let playHand;
  //     let compHand; 
  //     let playScore = 0;
  //     let compScore = 0;
    
  //   while(playScore < 3 && compScore < 3){
  //     compHand = rollRockPaperScissors();
  //         rawHand = prompt(`What is your hand?`,``);
  //         playHand = rawHand.slice(0,1).toUpperCase() + rawHand.slice(1).toLowerCase();
      
  //     if (playHand == `Rock` && compHand == `Scissors` || playHand == `Paper` && compHand == `Rock` || playHand == `Scissors` && compHand == `Paper`){
  //       playScore += 1; 
  //       console.log(`You ${playHand} beats my ${compHand}, you win!`);
  
  //     } else if (playHand == `Rock` && compHand == `Paper` || playHand == `Paper` && compHand == `Scissors` || playHand == `Scissors` && compHand == `Rock`){
  //       compScore += 1;
  //       console.log(`My ${compHand} beats your ${playHand}, you lose!`) ;
  
  //     } else if (playHand == compHand) {
  //         console.log(`We both draw with ${playHand}! Let's play again!`);
  //     } else {
  //         console.log(`Sorry, that's not a Rock, Paper or Scissors, try again!`);
  //     }
  //     }
    
  //       if (playScore == 3){
  //         console.log(`Congratulations! You WIN with a score of ${playScore} vs ${compScore}!`);
  //     } else if (compScore == 3){
  //         console.log(`Too bad! You LOSE With a score of ${playScore} vs ${compScore}!`);
  //     }
  // }