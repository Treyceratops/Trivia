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

/*----- animation -----*/

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

/*----- functions -----*/

function submit(event) {
	event.preventDefault();
    if (inpEl.value === '') {
        return;
    } else if (inpEl.value.toLowerCase().trim() === currentAnswer) {
		correctCount = correctCount + SCORE_BASE;
		score = score + SCORE_BASE;
		correctScoreDisplayEl.innerText = `Pass Score: ${correctCount}/7`;
        rightOrWrong = 'right!  😍';
	} else {
		incorrectCount = incorrectCount + SCORE_BASE;
		incorrectScoreDisplayEl.innerText = `Fail Score: ${incorrectCount}/4`;
        rightOrWrong = 'wrong! 😭';
	}
	idx++;
    currentQuestion = QUESTIONS[idx];
    currentAnswer = ANSWERS[idx];
	questionNumberEl.innerHTML = `Question# ${idx + 1}:`;
	questionEl.innerText = currentQuestion;
    displayPreviousScores();
    inpEl.value = '';
    inpEl.focus();
    winGame();
    loseGame();
};

function displayPreviousScores() {
    previousQuestionResultsEl.innerHTML = `The previous question was "${QUESTIONS[idx - 1]}".`;
    previousAnswerResultsEl.innerHTML = `The answer was "${ANSWERS[idx - 1]}". You guessed "${inpEl.value}" and... you got it ${rightOrWrong}`;
};

function winGame() {
	if (correctCount >= winningCorrectCount) {
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
		// submitEl.removeEventListener('click', submit);
        // return;
        // inpEl.remove();
        inpEl.style.display = 'none';
        submitEl.style.display = 'none';
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
	correctScoreDisplayEl.innerText = `Pass Score: ${correctCount}`;
	incorrectScoreDisplayEl.innerText = `Fail Score: ${incorrectCount}`;
    previousQuestionResultsEl.innerHTML = '';
	previousAnswerResultsEl.innerHTML = '';
    inpEl.style.display = 'block';
    submitEl.style.display = 'block';
};
init();
