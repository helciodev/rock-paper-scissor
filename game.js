/*
this the rock, paper scissor game 
*/

//variables declarations
const objects = ['📄', '💎', '✂'];
let playerScore = 0;
let computerScore = 0;
const playerName = prompt( 'welcome! Type your name, please' );

document.querySelector( 'span' ).textContent = playerName[0].toUpperCase() + playerName.substring( 1 );

//this function returns a random object for the computer 
//it uses Math round and random to return a random object for the computer
function computerPlay () {
  return objects[Math.round( Math.random() * 2 )];
}

//this function returns a single round of the game between the player against the computer
function playRound ( playerSelection, computerSelection ) {
  playerSelection = prompt( 'choose an object between: rock, paper and scissor' ).toLocaleLowerCase();
  computerSelection = computerPlay();

  //if else statements to test the computer and player selection
  if ( playerSelection == 'paper' && computerSelection == '✂' ) {
    computerScore++ //increments the computer score by 1 
    return 'You loose! ✂ beats 📄';
  } else if ( playerSelection == 'scissor' && computerSelection == '📄' ) {
    playerScore++ //increments the player score by 1
    return 'You win!  ✂ beats 📄';
  } else if ( playerSelection == 'rock' && computerSelection == '📄' ) {
    computerScore++;
    return 'You loose! 📄 beats 💎';
  } else if ( playerSelection == 'paper' && computerSelection == '💎' ) {
    playerScore++;
    return 'You win! 📄 beats 💎';
  } else if ( playerSelection == 'scissor' && computerSelection == '💎' ) {
    computerScore++
    return 'You loose! 💎 beats ✂';
  } else if ( playerSelection == 'rock' && computerSelection == '✂' ) {
    playerScore++;
    return 'You win! 💎 beats ✂';
  } else {
    return 'Draw'
  }

}

//the game function will console log the play round function 5 times and return the final score for the computer and the player

function game () {
  for ( let i = 0; i < 5; i++ ) {
    console.log( playRound() );
  }
  if ( playerScore > computerScore ) {
    console.log( '%c congratulations, you won!', 'font-size: 25px; font-family: cursive; color: green' )
  } else if ( computerScore > playerScore ) {
    console.log( '%c congratulations, you lose!', 'font-size: 25px; font-family: cursive; color: red' )
  } else {
    console.log( '%c Tie!', 'font-size: 25px; font-family: cursive; color: yellow' )
  }
  return `player score: ${playerScore} computer score: ${computerScore}`;
}

