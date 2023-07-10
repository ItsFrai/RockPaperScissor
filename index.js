const prompt = require("prompt-sync")();

function getComputerChoice() { 
    let arr = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomValue = arr[randomIndex];
    return randomValue;
}

function round(computerselection, userselection) { 
    if (computerselection === userselection) { 
        return ("Tie")
    } else { 
        if (computerselection === "Rock"){ 
            if (userselection === "Paper") { 
                return ("You win")
            } else if (userselection === "Scissor") { 
                return ("You lose")
            }

        } else if (computerselection === "Paper") {
            if (userselection === "Rock") { 
                return ("You lose")
            } else if (userselection === "Scissor") { 
                return ("You win")
            }
        } else if (computerselection === "Scissor") {
            if (userselection === "Rock") { 
                return ("You win")
            } else if (userselection === "Paper") { 
                return ("You lose")
            }
        }
    }  
}

let userScore = 0;
let computerScore = 0;

function game() { 
    for (i = 0; i < 5; i++) {
        let computerselection = getComputerChoice();
        let userselection = prompt("Pick something: "); 

        console.log("Computer's selection: " + computerselection);
        console.log("User's selection: " + userselection);

        if (round(computerselection,userselection) === "You win"){ 
            console.log("You won this round");
            userScore +=1;
        } else if (round(computerselection,userselection) === "You lose") { 
            console.log("Computer won this round");
            computerScore +=1;
        } else { 
            console.log("Its a tie");
        }
    }
    if (userScore > computerScore) { 
        return ("You won the game");
    } else if (computerScore > userScore) { 
        return ("Computer won the game!");
    } else { 
        return ("TIE GAME!");
    }
}
     


console.log(game());