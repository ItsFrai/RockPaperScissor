function getComputerChoice() { 
    let arr = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomValue = arr[randomIndex];
    return randomValue;
}

function round(computerselection, userselection) { 
    let result;
    if (computerselection === userselection) { 
        result = "Tie";
    } else { 
        if (computerselection === "Rock"){ 
            if (userselection === "Paper") { 
                result = "You win";
                userScore += 1;
            } else if (userselection === "Scissor") { 
                result = "You lose";
                computerScore += 1;
            }
        } else if (computerselection === "Paper") {
            if (userselection === "Rock") { 
                result = "You lose";
                computerScore += 1;
            } else if (userselection === "Scissor") { 
                result = "You win";
                userScore += 1;
            }
        } else if (computerselection === "Scissor") {
            if (userselection === "Rock") { 
                result = "You win";
                userScore += 1;
            } else if (userselection === "Paper") { 
                result = "You lose";
                computerScore += 1;
            }
        }
    }  

    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Score - User: ${userScore}, Computer: ${computerScore}`;

    if (userScore === 5 || computerScore === 5) {
        let displayResult = document.createElement("div");
        displayResult.classList.add("final-result");
        if (userScore > computerScore) {
          displayResult.textContent = "You won the game!";
          
        } else {
          displayResult.textContent = "Computer won the game!";
        } 
        document.body.appendChild(displayResult);
        userScore = 0;
        computerScore = 0;

        setTimeout(() => {
            displayResult.remove();
            displayResult = null;
          }, 3000);
    }
    
}


const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper");
const Scissor = document.getElementById("scissor");

let userScore = 0;
let computerScore = 0;


Rock.addEventListener('click', () => round(getComputerChoice(), "Rock"));
Paper.addEventListener('click', () => round(getComputerChoice(), "Paper"));
Scissor.addEventListener('click', () => round(getComputerChoice(), "Scissor"));


     
