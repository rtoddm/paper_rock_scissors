/* Function Requesting User Choice in the Game */

function getHumanChoice() {
  let choice = window.prompt(
    "Please enter your choice between paper, rock, or scissors."
  );

  return choice;
}

/* Function for Computer's Choice in the Game */

function getComputerChoice() {
  let number = Math.floor(Math.random() * 10);

  if (number <= 3) {
    return "paper";
  } else if (number > 3 && number < 7) {
    return "rock";
  } else {
    return "scissors";
  }
}

/* Score Variables */

let humanScore = 0;
let computerScore = 0;

function playGame() {
  /* Function for playing a single round */

  function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice;

    if (human == "paper" && computer == "rock") {
      console.log("You win! Paper beats rock!");
      humanScore += 1;
    } else if (human == "paper" && computer == "paper") {
      console.log("You tie! Paper and Paper!");
    } else if (human == "rock" && computer == "scissors") {
      console.log("You win! Rock beats scissors!");
      humanScore += 1;
    } else if (human == "rock" && computer == "rock") {
      console.log("You tie! Rock and Rock!");
    } else if (human == "scissors" && computer == "paper") {
      console.log("You win! Scissors beat paper!");
      humanScore += 1;
    } else if (human == "scissors" && computer == "scissors") {
      console.log("You tie! Scissors and Scissors!");
    } else {
      console.log(`You lose! ${computer} beats ${human}!`);
      computerScore += 1;
    }
  }

  let round = 0;

  while (round < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    round++;
  }

  if (humanScore > computerScore) {
    console.log(
      `You Win! Final Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `You Lose! Final Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }
}

playGame();
