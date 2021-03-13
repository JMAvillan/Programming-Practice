const winningScoreSelect = document.querySelector('#playto');
const buttons = document.querySelectorAll('button');
console.dir(buttons);
const player1 = document.querySelector('#p1Score');
const player2 = document.querySelector('#p2Score');

let scoreToReach = 3;
winningScoreSelect.addEventListener('change', function () {
  scoreToReach = parseInt(this.value);
  resetGame();
  //console.log(scoreToReach);
});

for (var button of buttons) {
  button.addEventListener('click', onClick);
}

function onClick() {
  winningScoreSelect.disabled = true;
  switch (this.id) {
    case "p1Button":
      if (++player1.innerText === scoreToReach)
        gameOver(player1, player2);
      break;
    case "p2Button":
      if (++player2.innerText === scoreToReach)
        gameOver(player2, player1);
      break;
    case "reset":
      resetGame();
      break;
  }
}

function resetGame() {
  winningScoreSelect.disabled = false;
  buttons[0].disabled = false;
  buttons[1].disabled = false;

  player1.style.color = "black";
  player1.textContent = 0;

  player2.style.color = "black";
  player2.textContent = 0;
}

function gameOver(winner, loser) {
  buttons[0].disabled = true;
  buttons[1].disabled = true;
  winner.style.color = "green";
  loser.style.color = "red";
}