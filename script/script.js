/*----- constants -----*/

const QUESTIONS = [
	'What color is the sky?',
	'What color is blue-grass?',
	'What color is the ocean?',
	'What color are blueberries?',
	'What color is a blue whale?',
	'What color is a smurf?',
	'What color is Neptune?',
	'What color is a blue t-shirt?',
	"What color are robins' eggs?",
	'What color is a sapphire',
	'What color is the color blue?',
];
const ANSWERS = [
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
	'blue',
];
const SCORE_BASE = 1;

/*----- app's state (variables) -----*/

let correctCount = 0;
let incorrectCount = 0;
let idx = 0;
let score = 0;
let currentQuestion = '';
let currentAnswer = '';
let winningCorrectCount = 7;
let losingIncorrectCount = 4;

/*----- cached element references -----*/

const questionNumberEl = document.querySelector('#question-no');
const questionEl = document.querySelector('#question');
const inpEl = document.querySelector('#input');
const submitEl = document.querySelector('#submit');
// might need to cache form instead of button?
const correctScoreDisplayEl = document.querySelector('#correct-score');
const incorrectScoreDisplayEl = document.querySelector('#incorrect-score');
const previousResultsEl = document.querySelector('#previous-results');
const resetEl = document.querySelector('#reset');

/*----- event listeners -----*/

submitEl.addEventListener('click', submit);
resetEl.addEventListener('click', init);

/*----- functions -----*/

function submit(event) {
	event.preventDefault();
	if (inpEl.value === currentAnswer) {
		correctCount = correctCount + SCORE_BASE;
		score = score + SCORE_BASE;
		correctScoreDisplayEl.innerText = `Correct Score: ${correctCount}`;
	} else {
		incorrectCount = incorrectCount + SCORE_BASE;
		incorrectScoreDisplayEl.innerText = `Incorrect Score: ${incorrectCount}`;
	}
	idx++;
	questionNumberEl.innerHTML = `Question# ${idx + 1}:`;
	questionEl.innerText = QUESTIONS[idx];
    winGame();
    loseGame();
}

function winGame() {
	if (correctCount >= 7) {
		questionNumberEl.innerHTML = ``;
		questionEl.innerHTML = `You're a genius! You win!`;
		return;
	}
}

function loseGame() {
	if (incorrectCount >= 4) {
		questionNumberEl.innerHTML = ``;
		questionEl.innerHTML = `Not this time suckaaa! You lose. Try again?`;
		return;
	}
}

// function incrementScore(score) {
//     return score + SCORE_BASE;
// }

function init() {
	correctCount = 0;
	incorrectCount = 0;
	idx = 0;
	score = 0;
	currentQuestion = QUESTIONS[idx];
	currentAnswer = ANSWERS[idx];
	questionNumberEl.innerHTML = `Question# ${idx + 1}:`;
	questionEl.innerHTML = `${currentQuestion}`;
	correctScoreDisplayEl.innerText = `Correct Score: ${correctCount}`;
	incorrectScoreDisplayEl.innerText = `Incorrect Score: ${incorrectCount}`;
}
init();
