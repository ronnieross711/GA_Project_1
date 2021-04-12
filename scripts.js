// Grab the h1 and first p tags and the play button
// 

const playButton = document.getElementById('play')
// console.log(playButton)
const restartButton = document.getElementById('restart')
const allQuestions = document.querySelectorAll('.container')
// console.log(allQuestions);
const main = document.querySelector('#container')

let allQuestions = [
    {question: "jkasdhfkjahsdf", answer}
]

let questions = allQuestions[0]
// function userClick(){
    // turning allQuestions into a proper array
    let a = Array.from(allQuestions)
    console.log(a)
    let filteredList = a.filter(question => question.length)
console.log(filteredList)

function newFunction(x) {
   return x.classList.contains('current')
}

function clickPlay(e) {
    allQuestions[0].classList.add('current')
}

playButton.addEventListener('click', clickPlay)

const nextButton = document.querySelector('#nextButton')
const q1= document.getElementById('#question1')
const q2 = document.getElementById('#question2')
const q3 = document.getElementById('#question3')

function startGame() {
    playButton.classList.add('hide')
}
function goNext(e) {
      allQuestions[1].classList.add('current')
}
nextButton.addEventListener('click', goNext)


// First Question
const answer1 = document.querySelector("#answer1")
function correctAnswer(e) {
    answer1.onclick = alert('Correct!')
}
answer1.addEventListener('click', correctAnswer)

const answer2 = document.querySelector('#answer2')
function wrongAnswer(e) {
    answer2.onclick = alert('Wrong, try again')
}
answer2.addEventListener('click', wrongAnswer)

const answer3 = document.querySelector('#answer3')
function wrongAnswer(e) {
    answer3.onlcick = alert('Wrong, try again')
}
answer3.addEventListener('click', wrongAnswer)

const answer4 = document.querySelector('#answer4')
function wrongAnswer(e) {
    answer4.onlcick = alert('Wrong, try again')
}
answer4.addEventListener('click', wrongAnswer)
// First Question



function clickRestart(e) {
    restartButton.onclick = alert('Start Over!')
}
restartButton.addEventListener('click', clickRestart)

// Do i need to make a function for each question to show on the page?
// Or should I just give them all the same id to make it easier?
// Is the only way to do it by adding the code in the head of your html?
