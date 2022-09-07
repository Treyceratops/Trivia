/*----- constants -----*/

const QUESTIONS = [
    'What color is the sky?', 
    'What color is grass?'
];
const ANSWERS = [
    'blue', 
    'green'
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
const submitEl = document.querySelector('#submit');
// might need to cache form instead of button?
const scoreDisplayEl = document.querySelector('#score');
const previousResultsEl = document.querySelector('#previous-results');
const resetEl = document.querySelector('#reset');

/*----- event listeners -----*/

resetEl.addEventListener('click', init);
// submitEl.addEventListener('click', submit);

/*----- functions -----*/

// function submit() {
//     idx++;
//     question.innerText = QUESTIONS[idx];
//     IF CORRECT (input.value === currentAnswer) {
//     score = score + SCORE_BASE;
//     score.innerText = score;
//     }
   
// }

// function incrementScore(score) {
//     return score + SCORE_BASE;
// }

function init() {
    correctCount = 0;
	incorrectCount = 0;
    idx = 0; 
    currentQuestion = QUESTIONS[idx];
    currentAnswer = ANSWERS[idx];
    questionNumberEl.innerHTML = `Question# ${idx +1}:`
    questionEl.innerHTML = `${currentQuestion}`;
};
init();
