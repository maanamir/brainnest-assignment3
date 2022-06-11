var GameCounter = {
  total: 0,
  wins: 0,
  loses: 0,
  draw: 0,
};

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * options.length);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  let result = -10;

  computerSelection = computerSelection.toLowerCase();

  console.log("player Selected (" + playerSelection + ")");
  console.log("Computer Selected ( " + computerSelection + ")");
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    //tie
    result = -1;
    // console.log(result);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = 0;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = 0;
    //  console.log(result);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = 0;
    //  console.log(result);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = 1;
    //   console.log(result);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = 1;
    //   console.log(result);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = 1;
    //    console.log(result);
  } else {
    result = 101;
    //    console.log(result);
  }
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    GameCounter.total = i + 1;
    const playerSelection = prompt(
      `Rock, Paper or Scissors round ${GameCounter.total}`
    );
    const computerSelection = computerPlay();
    switch (playRound(playerSelection, computerSelection)) {
      case 1:
        alert(
          `You Win the round! ${playerSelection} beats ${computerSelection}`
        );
        GameCounter.wins++;
        break;
      case 0:
        alert(
          `You Lose the round! ${computerSelection} beats ${playerSelection}`
        );
        GameCounter.loses++;
        break;
      case -1:
        alert(
          `This round is a tie,! ${playerSelection} cant beat ${computerSelection}`
        );
        GameCounter.draw++;
        break;
      case 101:
        --GameCounter.total;
        --i;
        alert("Incorrect Input");

        break;
    }
  }
}

game();
if (GameCounter.wins > GameCounter.loses) {
  alert("Congratz, You have won the match. "+ `wins=${GameCounter.wins},`+
  `lost=${GameCounter.loses}, `+`draws=${GameCounter.draw}.`);
} else if (GameCounter.wins == GameCounter.loses) {
  alert("Not Bad, Its a draw "+ `wins=${GameCounter.wins},`+
  `lost=${GameCounter.loses},`+`draws=${GameCounter.draw}.`);
} else {
  alert("Too bad,You lost the match "+ `wins=${GameCounter.wins},`+
  `lost=${GameCounter.loses},`+`draws=${GameCounter.draw}.`);
}
