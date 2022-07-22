const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pSelection = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cSelection = cOptions[Math.floor(Math.random() * 3)];

    playRound(pSelection, cSelection);
    updateScore();
    if (checkWinner()) {
      pScore = cScore = 0;
      updateScore();
    }
  });
});

function playRound(pSelection, cSelection){
  const currentMatch = `${pSelection} Computer selected: ${cSelection}`;
  if (pSelection === cSelection) {
    
    showResult(`${currentMatch} is a Tie`);
    return;
  }
  if (pSelection === "Rock") {
    if (cSelection === "Scissors") {
      showResult(`${currentMatch} = You win`);
    pScore++;
      } else {
        showResult(`${currentMatch} = Computer Wins`);
        cScore++;
      }
    }
    else if (pSelection === "Paper") {
      if (cSelection === "Rock") {
          showResult(`${currentMatch} = You win`)
        pScore++;
      } else {
        showResult(`${currentMatch} = Computer Wins`)
        cScore++;
      }
    }
    else {
      if (cSelection === "Paper") {
        
        showResult(`${currentMatch} = You win`)
        pScore++;
      } else {
              showResult(`${currentMatch} = Computer Wins`)
        cScore++;
      }
    }
}

function updateScore() {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
}

function checkWinner() {
  if ((pScore + cScore) === 5) {
    const winner =
      pScore > cScore
        ? showResult("You win the game! Congratulations!")
        : showResult("Computer wins the game! Try again next time!");
    
    return true;
  }
  return false;
}

const showResult = (text)=>{
  const para = document.createElement("p");
  para.innerHTML = text;
  document.querySelector(".ans").appendChild(para);
}