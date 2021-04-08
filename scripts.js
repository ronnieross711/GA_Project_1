// Grab the h1 and first p tags and the play button
// 

const playButton = document.getElementById('play')
// console.log(playButton)
const restartButton = document.getElementById('restart')


function clickPlay(e) {
    playButton.onclick = alert('The game has begun')
}

playButton.addEventListener('click', clickPlay)

function clickRestart(e) {
    restartButton.onclick = alert('Start Over!')
}
restartButton.addEventListener('click', clickRestart)