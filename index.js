function computerPlay() {
    const array = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

// const result = computerPlay();

function playRound(playerSelection, computerSelection){
    let message = '';
    if (playerSelection.toLowerCase()== "rock" && computerSelection == "scissors" || playerSelection.toLowerCase() == "paper" && computerSelection == "rock" || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        
       message = `You win!, ${playerSelection} beats ${computerSelection}`
     }
     else if (playerSelection.toLowerCase()=="rock" && computerSelection =="paper" || playerSelection.toLowerCase()== "scissors" && computerSelection =="rock" || playerSelection.toLowerCase()=="paper" && computerSelection =="scissors"){
       
       message = `You lose!, ${computerSelection} beats ${playerSelection}`
     }
     else if (playerSelection.toLowerCase() == computerSelection){
      
       message = `It's a tie! ${playerSelection} is equal to ${computerSelection}`
     } 
    
    return message;
}

function game(){
  for(let i = 0; i < 5; i++){
      let input = prompt('Please enter your selection...');
      console.log(playRound(input, computerPlay()));
  }
}
console.log(game());