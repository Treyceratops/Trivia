/*----- constants -----*/

const QUESTIONS = [
	'What is the modulus operator?',
	'What is the bang operator?',
	'True or False? This arrow function is valid JS: let myFunction = (a, b) => a * b;',
	'True or False? This string interpolation example is valid JS: $`This is the worst {trivia} ever!`',
	'True or False? 0 evaluates to false.',
	'There are 7 primitive data types: String, Number, BigInt, Undefined, Symbol, Null, and ...?',
	'Javascript is considered OOP, which stands for...?',
	'What HTML <tag> do we put JavaScript into?',
	"This method would select all <p>. Fill in the blank: document._blank_All('p')",
	'This function takes a string and returns it as an integer. Fill in the blank: _blank_()',
];
const ANSWERS = [
	'%',
	'!',
	'true',
	'false',
	'true',
	'boolean',
	'object oriented programming',
	'<script>',
	'queryselector',
	'parseint',
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
let rightOrWrong = '';

/*----- cached element references -----*/

const questionNumberEl = document.querySelector('#question-no');
const questionEl = document.querySelector('#question');
const inpEl = document.querySelector('#input');
const submitEl = document.querySelector('#submit');
const correctScoreDisplayEl = document.querySelector('#correct-score');
const incorrectScoreDisplayEl = document.querySelector('#incorrect-score');
const previousQuestionResultsEl = document.querySelector('#previous-question-results');
const previousAnswerResultsEl = document.querySelector('#previous-answer-results');
const resetEl = document.querySelector('#reset');

/*----- event listeners -----*/

submitEl.addEventListener('click', submit);
resetEl.addEventListener('click', init);

/*----- functions -----*/

function submit(event) {
	event.preventDefault();
    if (inpEl.value === '') {
        return;
    } else if (inpEl.value.toLowerCase().trim() === currentAnswer) {
		correctCount = correctCount + SCORE_BASE;
		score = score + SCORE_BASE;
		correctScoreDisplayEl.innerText = `Correct Score: ${correctCount}`;
        rightOrWrong = 'right!  😍';
	} else {
		incorrectCount = incorrectCount + SCORE_BASE;
		incorrectScoreDisplayEl.innerText = `Incorrect Score: ${incorrectCount}`;
        rightOrWrong = 'wrong! 😭';
	}
    inpEl.value = '';
	idx++;
	questionNumberEl.innerHTML = `Question# ${idx + 1}:`;
	questionEl.innerText = QUESTIONS[idx];
    displayPreviousScores();
    winGame();
    loseGame();
};

function displayPreviousScores() {
    previousQuestionResultsEl.innerHTML = `The previous question was "${QUESTIONS[idx - 1]}".`;
    previousAnswerResultsEl.innerHTML = `The answer was "${ANSWERS[idx - 1]}" and... you got it ${rightOrWrong}`;
};

function winGame() {
	if (correctCount >= 7) {
		questionNumberEl.innerHTML = ``;
		questionEl.innerHTML = `You're a genius! 🧠 You win!`;
		return;
	}
};

function loseGame() {
	if (incorrectCount >= 4) {
		questionNumberEl.innerHTML = ``;
		questionEl.innerHTML = `Not this time suckaaa! 😡 You lose. Try again?`;
		return;
	}
};

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
};
init();
