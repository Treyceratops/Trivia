## Project Choice

- Trivia (Self-scoring)

## Project Description

- Trivia with a Javascript theme

## Embedded Screenshot of the App

![](../../../Desktop/Screen%20Shot%202022-09-12%20at%2007.39.38.png)

## Wire Frame

https://www.figma.com/file/KSsQ5Ak5pftMoZCfS8ufL1/Untitled?node-id=0%3A1

## Technologies used

- HTML
- CSS
- JavaScript
- Animate.css Library

## User Stories

- AAU I want to be told the rules of the game and winning/losing conditions
- AAU I want to be asked a question
- AAU I want somewhere to input my guessed answer
- AAU I want to know if my answer was correct or not
- AAU I want to see my current correct answer score
- AAU I want to see my current incorrect answer score

## MVP Goals

- display rules
- ask trivia question
- have a space for inputting answer
- display if answer was correct or incorrect
- keep score of incorrect and correct answers
- set/display winning conditions
- set/display losing conditions
- display results of previous answer and whether they got it correct or not

## Stretch Goals

- Design
- Animation
- Ask question randomly and make it unrepeatable
- add containers around elements
- Add time-based scoring or speed Round?


## Pseudo-code

- create div for rules, score, last answer, & correctness, input/input button, question, & reset button with classes
- define rules
- define questions/answers, correct/incorrect count, current idx, score, win/lose count
- cache divs by id
- display question and link corresponding answer
- add event listener to button to check input's value to see if (input.value === answer), adjusts correct/incorrect answers, brings up next question (QUESTIONS[idx++]), next answer (ANSWERS[idx++])
- delete input's value after clicking submit
- input.value methods on event listener (.toLowerCase, .trim)
- display updated scores
- display previous questions info
- set win/lose conditions if (score >= winCondition#) then display win, else if (score >= loseCondition#) then display loss 
- resetGame by calling init()
- stop functioning after 10 questions or win/loss

## Unsolved problems or Major Hurdles

- Did not know the usage of (event.preventDefault()) and was resetting the (input.value) without my understanding before it was in place
- Did not know the usage of (element.style.display = 'block'/'none') 