//  Rock paper scissors

let playerWinCount = 0;
let computerWinCount = 0;

const computer = ["scissors", "rock", "paper"];

while (playerWinCount < 3 && computerWinCount < 3) {
  let player = window.prompt("scissors, rock, paper");
  const randomComputer = computer[Math.floor(Math.random() * computer.length)];
  console.log("Player: " + player);
  console.log("Computer: " + randomComputer);
  if (player == randomComputer) {
    console.log("TIE");
  } else if (player == "scissors" && randomComputer == "paper") {
    console.log("Player  WON");
    playerWinCount++;
  } else if (player == "rock" && randomComputer == "scissors") {
    console.log("Player  WON");
    playerWinCount++;
  } else if (player == "paper" && randomComputer == "rock") {
    console.log("Player  WON");
    playerWinCount++;
  } else if (player == "paper" && randomComputer == "scissors") {
    console.log("Computer  WON");
    computerWinCount++;
  } else if (player == "scissors" && randomComputer == "rock") {
    console.log("Computer  WON");
    computerWinCount++;
  } else if (player == "rock" && randomComputer == "paper") {
    console.log("Computer  WON");
    computerWinCount++;
  }

  console.log("Player point:" + playerWinCount);
  console.log("Computer point:" + computerWinCount);
}
if (playerWinCount == 3) {
  console.log("Player is Victory");
} else if (computerWinCount == 3) {
  console.log("Computer is Victory");
}
