// js file for rps

//declaring variables
const buttonRock = document.getElementById("rock");
buttonRock.textContent = "Rock";
const buttonPaper = document.getElementById("paper");
buttonPaper.textContent = "Paper";
const buttonScissors = document.getElementById("scissors");
buttonScissors.textContent = "Scissors";

const scoreBoard = document.querySelector(".scoreBoard");
const humanScore = document.createElement("h2");
let humanBase = 0;
humanScore.textContent = "Player: " + humanBase;
const aiScore = document.createElement("h2");
let aiBase = 0;
aiScore.textContent = "Computer: " + aiBase;
const declaration = document.createElement("h2");
declaration.textContent = "Let the game begin!";
scoreBoard.append(humanScore);
scoreBoard.append(aiScore);
scoreBoard.append(declaration);

//styling
humanScore.setAttribute("style", "display : flex; direction : row");
aiScore.setAttribute("style", "display : flex; direction : column");
scoreBoard.setAttribute("style", "display : flex; direction : row; gap : 48px");

// event listeners
buttonRock.addEventListener("click", () => {
    humChoice = buttonRock.textContent.toUpperCase();
    game(humChoice);
});
buttonPaper.addEventListener("click", () => {
    humChoice = buttonPaper.textContent.toUpperCase();
    game(humChoice);
});
buttonScissors.addEventListener("click", () => {
    humChoice = buttonScissors.textContent.toUpperCase();
    game(humChoice);
});

// game logic and funtions
// human choice
let humChoice = '';

// ai choice
function aiChoice(random) {
    random = Math.random();
    if (random < 0.3 ) {
	return "ROCK" ;
    }else if (random < 0.6) {
	return "PAPER" ;
    }else {
	return "SCISSORS" ;
    }
}

// compare and declare result
function compareInput(ai, hum) {
    if (ai === hum) {
	return "THIS IS A TIE! YOU BOTH PICKED " + ai + ".";
    } else if (
	(ai === "ROCK" && hum === "PAPER") ||
	(ai === "PAPER" && hum == "SCISSORS") ||
	(ai === "SCISSORS" && hum === "ROCK")) {
	return "HUMAN WINS. AI PICKED " + ai + " AND YOU PICKED " + hum + ".";
    } else {
	return "AI WINS. AI PICKED " + ai + " AND YOU PICKED " + hum + "." ;
    }
}

// play a round
function game() {
    
    ai = aiChoice();
    hum = humChoice;
    result = compareInput(ai, hum);
    if (result.includes("HUMAN WINS")) {
	humanBase++;
	} else if (result.includes("AI WINS")) {
	aiBase++;
	}
    console.log(result);
    aiScore.textContent = "Computer: " + aiBase;
    console.log("AI Score: " + aiBase);
    humanScore.textContent = "Player: " + humanBase;
    console.log("Hum Score: " + humanBase);
    declaration.textContent = result;
}

// play one round //
// play multiple rounds //


// function game () {
//     let aiSc = 0;
//     let humSc = 0;
    
//     for (let x=1; x<=5; x++) {
// 	ai = aiChoice();
// 	hum = humChoice();
// 	result = compareInput(ai, hum);

// 	if (result.includes("HUMAN WINS")) {
// 	    humSc++;
// 	} else if (result.includes("AI WINS")) {
// 	    aiSc++;
// 	}

// 	console.log(result);
// 	console.log("AI Score: " + aiSc);
// 	console.log("Hum Score: " + humSc);    
//     }
//     console.log("FINAL SCORE: AI - " + aiSc +", HUM - " + humSc + " .");
// }





// if ai choice and human choice are same its a draw or reroll //
// if rock is against paper it loses and against scissors it wins //
// declare winner for the round //
// add to existing scoreboard //
