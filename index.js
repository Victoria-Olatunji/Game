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
        
       message = `Computer played ${computerSelection} \nYou played ${playerSelection} \nYou win!, ${playerSelection} beats ${computerSelection}`
     }
     else if (playerSelection.toLowerCase()=="rock" && computerSelection =="paper" || playerSelection.toLowerCase()== "scissors" && computerSelection =="rock" || playerSelection.toLowerCase()=="paper" && computerSelection =="scissors"){
       
       message = `Computer played ${computerSelection} \nYou played ${playerSelection} \nYou lose!, ${computerSelection} beats ${playerSelection}`
     }
     else if (playerSelection.toLowerCase() == computerSelection){
      
       message = `Computer played ${computerSelection} \nYou played ${playerSelection} \nIt's a tie! ${playerSelection} is equal to ${computerSelection}`
     } 
    
    return message;
}

function game(){
  for(let i = 0; i < 5; i++){
    let input = prompt('Please enter selection...'); 
      input = input.toLowerCase();
      if( input === 'rock' || input === 'paper' || input === 'scissors'){
        console.log(`Round ${i+1} \n${playRound(input, computerPlay())}`);
      }else{
       console.log('Invalid selection,choose only rock paper scissors');
       i--;
      }
    }
    return '';
  }
console.log(game());





