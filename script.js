let playerName = window.prompt("Enter your name");


const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function getHumanChoice() {
        let humanChoice = window.prompt("Make your choice: Rock, Paper or Scissors");
        while (!humanChoice) {
        humanChoice = window.prompt("You must enter a choice! Rock, Paper or Scissors");
   } 
   return humanChoice.toLowerCase().trim();
}

function computerChoice() {
    const num = Math.floor(Math.random() * 3);

        if (num === 0) return "rock";
        else if (num === 1) return "paper";
        return "scissors";
}


        function playRound(humanChoice, computerChoice) {


            if (humanChoice === computerChoice){
             return "It's a tie";
            }
            if (beats[humanChoice] === computerChoice) {
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice}`;
            }   
            else {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            }
        }
        for (let i = 0; i < 5; i++) {
                const humanChoice = getHumanChoice();
                const computerSelection = computerChoice();
                const result = playRound(humanChoice, computerSelection);
                console.log(result);
            }

if (humanScore > computerScore) {
    console.log(`Final result, congratulations ${playerName} you won!`);
}
else if (humanScore < computerScore) {
    console.log("Final result, you lose! Better luck next time!");
}
else {
    console.log("It's a draw!");
}
}

playGame();