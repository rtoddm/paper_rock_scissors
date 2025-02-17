/* Function Declaration */

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
