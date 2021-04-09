// Grab the h1 and first p tags and the play button
// 

const playButton = document.getElementById('play')
// console.log(playButton)
const restartButton = document.getElementById('restart')
const questions = document.querySelectorAll('.container')
console.log(questions);
// const modal1 = document.getElementById("modal-text-box")
function togglePlay() {
    let play = document.getElementById('play')
    let displaySetting = play.style.display
    if(displaySetting == 'block') {
        play.style.display = 'none';
        playButton.innerHTML = 'Show button';
    } else {
        play.style.display = 'block';
        playButton.innerHTML = 'Hide button';
    }
} play.onlcick = togglePlay()
// function disappear() {
//    let  allQuestions = document.getElementsByClassName('answers');
//    allQuestions.style.display = 'none'
//    console.log(disappear())
//    return allQuestions
// }
// disappear()
function clickPlay(e) {
    playButton.onclick = alert('The game has begun')
}

playButton.addEventListener('click', clickPlay)

function clickRestart(e) {
    restartButton.onclick = alert('Start Over!')
}
restartButton.addEventListener('click', clickRestart)

// Do i need to make a function for each question to show on the page?
// Or should I just give them all the same id to make it easier?
// Is the only way to do it by adding the code in the head of your html?
// what is going on with my github?