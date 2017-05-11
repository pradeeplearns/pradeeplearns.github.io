var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");

var winningScoreDisplay = document.querySelector("p span");

var numInput = document.getElementsByTagName("input")[0];

var p1Score = 0, p2Score = 0;

var maxScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		
		if (maxScore === p1Score) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}	
})

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;

		if (maxScore === p2Score) {	
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}	
})

reset.addEventListener("click", function() {
	resetGame();
})

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	maxScore = Number(this.value);
	resetGame();
})

function resetGame() {
	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	gameOver = false;
}