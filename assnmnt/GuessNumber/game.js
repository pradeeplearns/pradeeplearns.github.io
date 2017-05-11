//Set the number
var num = 4;

//Ask for Number
var guess = guessWork();
	
while(guess !== 4) {
	//Too Small
	 if(guess < 4) {
		alert("awww! try again its too low!");		
	}
	//too big
	else {
		alert("woah! thats big, try again.");8		
	}
	guess = guessWork();
}

//Check the number
	alert("Congratulations! You got it.");


function guessWork () {
	// body...
	var guessString = prompt("Guess the number!");
	return Number(guessString);
}