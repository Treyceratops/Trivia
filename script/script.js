/*----- constants -----*/

const QUESTIONS = [
	'What is the modulus operator?',
	'What is the bang operator?',
	'True or False? This arrow function is valid JS: let myFunction = (a, b) => a * b;',
	'True or False? This string interpolation example is valid JS: $`This is the worst {trivia} ever!`',
	'True or False? 0 evaluates to false.',
	'There are 7 primitive data types: String, Number, BigInt, Undefined, Symbol, Null, and ...?',
	'Javascript is considered OOP, which stands for...?',
	'What HTML <tag> do we put JavaScript into? Fill in the blank: <_blank_>',
	"This method would get all <p> from the DOM. Fill in the blank: document._blank_All('p')",
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
	'script',
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
let haveIt = [];
let questionNumIdx = 0;
let previousIdx = 0;

/*----- cached element references -----*/

const questionNumberEl = document.querySelector('#question-no');
const questionEl = document.querySelector('#question');
const inpEl = document.querySelector('#input');
const submitEl = document.querySelector('#submit');
const correctScoreDisplayEl = document.querySelector('#correct-score');
const incorrectScoreDisplayEl = document.querySelector('#incorrect-score');
const previousQuestionResultsEl = document.querySelector('#previous-question-results');
const previousAnswerResultsEl = document.querySelector('#previous-answer-results');
const previousResultsEl = document.querySelector('#previous-results');
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
		correctScoreDisplayEl.innerText = `Pass Score: ${correctCount}/7`;
        rightOrWrong = 'correct. 😍';
	} else {
		incorrectCount = incorrectCount + SCORE_BASE;
		incorrectScoreDisplayEl.innerText = `Fail Score: ${incorrectCount}/4`;
        rightOrWrong = 'incorrect. 😭';
	}
    previousIdx = idx;
	idx = generateUniqueRandom(9);
    currentQuestion = QUESTIONS[idx];
    currentAnswer = ANSWERS[idx];
	questionNumberEl.innerHTML = `Question# ${questionNumIdx + 1}:`;
	questionEl.innerText = currentQuestion;
    displayPreviousScores();
    inpEl.value = '';
    inpEl.focus();
    winGame();
    loseGame();
};

function displayPreviousScores() {
    previousQuestionResultsEl.innerHTML = `Previous Question: "${QUESTIONS[previousIdx]}".`;
    previousAnswerResultsEl.innerHTML = `Previous Answer: "${ANSWERS[previousIdx]}"`;
    previousResultsEl.innerHTML =
			`Previous Results: You guessed "${inpEl.value}" and were ${rightOrWrong}`;
};

function winGame() {
    if (correctCount >= winningCorrectCount && incorrectCount === 0) {
			questionNumberEl.innerHTML = ``;
			questionEl.innerHTML = `Perfect score! 💯 You passed!`;
			submitEl.removeEventListener('click', submit);
			inpEl.style.display = 'none';
			submitEl.style.display = 'none';
		} else if (correctCount >= winningCorrectCount) {
			questionNumberEl.innerHTML = ``;
			questionEl.innerHTML = `Pure genius! 🧠 You passed!`;
			submitEl.removeEventListener('click', submit);
			inpEl.style.display = 'none';
			submitEl.style.display = 'none';
		}
};

function loseGame() {
	if (incorrectCount >= losingIncorrectCount) {
		questionNumberEl.innerHTML = ``;
		questionEl.innerHTML = `😡 You failed. Try again?`;
        inpEl.style.display = 'none';
        submitEl.style.display = 'none';
	}
};

function generateUniqueRandom(maxNr) {
	let random = (Math.random() * maxNr).toFixed();
	random = Number(random);
    if (!haveIt.includes(random)) {
		haveIt.push(random);
		return random;
	} else {
		if (haveIt.length < maxNr) {
			return generateUniqueRandom(maxNr);
		} else {
			return false;
		}
	}
};

function init() {
	correctCount = 0;
	incorrectCount = 0;
	idx = generateUniqueRandom(9);
	score = 0;
	currentQuestion = QUESTIONS[idx];
	currentAnswer = ANSWERS[idx];
    haveIt = [];

	questionNumberEl.innerHTML = `Question# ${questionNumIdx = 0 + 1}:`;
	questionEl.innerHTML = `${currentQuestion}`;
	correctScoreDisplayEl.innerText = `Pass Score: ${correctCount}`;
	incorrectScoreDisplayEl.innerText = `Fail Score: ${incorrectCount}`;
    previousQuestionResultsEl.innerHTML = 'Previous Results:';
	previousAnswerResultsEl.innerHTML = '';
    previousResultsEl.innerHTML = '';
    inpEl.style.display = 'block';
    submitEl.style.display = 'block';
};
init();
