var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var gameModes = document.getElementsByClassName("mode");

init();

function init() {
	settingGameMode();
	settingUpSquares();	
	resetGame();
}

function settingGameMode() {
	for (var i = 0; i < gameModes.length; i++) {
		gameModes[i].addEventListener("click", function() {
			gameModes[0].classList.remove("selected");
			gameModes[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			resetGame();
		})
	}
}

function settingUpSquares() {
	for (var i = 0; i < squares.length; i++) {	
		//add click event to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.background;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "CORRECT!";
				sameColorSquare(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "TRY AGAIN!";
			}
		})
	}
}

function resetGame() {
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = ""; 
}

resetButton.addEventListener("click", function() {
	resetGame();
});

function sameColorSquare(color) {
	//Assign correct color to each square
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
} 

function generateRandomColor(num) {
	// make an array of num size
	var arr = [];

	//add num random colors
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	// pick a red, pick a green and pick a blue from 0 to 255

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//rgb(r, g, b)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}