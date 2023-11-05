  
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
  
  score.style.color = 'yellow';
  setTimeout(()=> score.style.color = 'red', 100);

  if ( user == comp ){
    score.textContent = `BOTH ${user}! DRAW!`;

    } else if ( user == hand[0] && comp == hand[1] 
    || user == hand[1] && comp == hand[2] 
    || user == hand[2] && comp == hand[0] ){

    score.textContent = `MY ${comp} BEATS YOUR ${user}!`;
    compScore += 1;

    } else if ( user == hand[0] && comp == hand[2] 
    || user == hand[1] && comp == hand[0] 
    || user == hand[2] && comp ==[1]) {

    score.textContent = `YOUR ${user} BEATS MY ${comp}!`;
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