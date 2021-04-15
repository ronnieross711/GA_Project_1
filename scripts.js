let questions = [
    { question: 'What year did Phish officially become a band?',
    choices: ["1984", "2001", "1981", "1994"],
    answer: "1984"
},

    
{ question: "What is the name of Jimmy's cat?",
  choices: ["Sara", "Col. Forbin", "Poster NutBag", "Ocelot"],
  answer: "Poster NutBag"
},

{ question: "How many Festivals has Phish thrown?",
  choices: ["5", "7", "10", "11"],
  answer: "11"

},

{ question: "Who is the Guitar maker of Trey Anastasio's guitar?",
  choices: ["Fender", "Gibson", "Modulus", 'Languedoc'],
  answer: "Languedoc"
},
  
{ question: "What is the Drummer's name?",
  choices: ["Derek Trucks", "Zach Rice", "Neil Pert", "Jon Fishman"],
  answer: "Jon Fishman"
},

{ question: "Who was the founding memeber of Phish originally, but left the band?",
  choices: ["Jeff HOldsworth", "Page McConnell", "Jerry Garcia", "Neil Young"],
  answer: "Jeff HOldsworth"
},

{ question: "Which festival was thrown in 2003?",
  choices: ["Festival 8", "IT", "The Great Went", "Clifford Ball"],
  answer: "IT"
},

{ question: "What album did Phish cover on Halloween 1996?",
  choices: ["Dark Side of the Moon", "Remain In Light", "Led Zeppelin IV", "American Beauty"],
  answer: "Remain In Light"
},

{ question: "What year did they tour in Japan?",
  choices: ["1999", "2000", "2001", "1998"],
  answer: "2000"
},

{ question: "WHat year did the NYE gag go wrong, and Trey got stuck?",
  choices: ["2019", "2018", "2015", "2021"],
  answer: "2019"
},

{ question: "Who was the first Phish Phan?",
  choices: ["Jimmy", "Ronnie", "Brad", "Amy"],
  answer: "Amy"
},

{ question: "Finish the Lyric: 'I saw you....",
  choices: ["Stading there", "Lookin' through the window", "Dancing in the streets", "With a ticket stub in your hand"],
  answer: "With a ticket stub in your hand"
},

{ question: "What song do they sing part of in Japanese?",
  choices: ["Stash", "Gumbo", "Meatstick", "Golden Age"],
  answer: "Meatstick"
},

{ question: "Which years did Phish ride in on a hotdog for NYE?",
  choices: ["1997 and 1998", "2000 and 2003", "1999 and 2011", "2015 and 2018"],
  answer: "1999 and 2011"
},

{ question: "Who wrote 'My Sweet One'?",
  choices: ["Trey Anastasio", "Page McConnell", "Jon Fishman", "Mike Gordon"],
  answer: "Jon Fishman"
},

{ question: "What islands did Phish go to for the legendary island tour?",
  choices: ["Bahamas", "Florida Keys", "Long Island and Rhode Island", "Caymen Islands"],
  answer: "Long Island and Rhode Island"
},
 
{ question: "Which festival almost got totally rained out and was a mud pit for 3 days?",
  choices: ["The Great Went", "Coventry", "Magnaball", "Curvball"],
  answer: "Coventry"
},
   
{ question: "Which band member graduated from the University of Vermont?",
  choices: ["Mike Gordon", "Page McConnell", "Jon Fishman", "Trey Anastasio"],
  answer: "Mike Gordon"
},

{ question: "What is Page McConnell's nickname?",
  choices: ["Lawn Boy", "Big Red", "Leo", "Piano Man"],
  answer: "Leo"
},
]

let h1Question = document.getElementById("question")


let answerButton1 = document.getElementById("answer1")
let answerButton2 = document.getElementById("answer2")
let answerButton3 = document.getElementById("answer3")
let answerButton4 = document.getElementById("answer4")
const playButton = document.getElementById('play')
let nextButton = document.getElementById("nextButton")
let backButton = document.getElementById("backButton")
let i = 0
let answerButtons = document.querySelectorAll(".answerButton")
function playGame() {
    // console.log('working')
    playButton.classList.add("hide")
    h1Question.innerHTML = questions[i].question
    let choices = questions[i].choices
    for(let index = 0; index <= choices.length; index++ ) {
    //    console.log("choices", choices[index])
        answerButtons[index].innerHTML = choices[index]
     } 
}

function nextQuestion(e) {
    i++
    
    let choices = questions[i].choices
    for(let index = 0; index < choices.length; index++ ) {
       answerButtons[index].innerHTML = choices[index]
       answerButtons[index].disabled = false
     }
    h1Question.innerHTML = questions[i].question 
}




function goBack(e) {
    i--
    let choices = questions[i].choices
    for(let index = 0; index < choices.length; index++ ) {
       answerButtons[index].innerHTML = choices[index]
     }
    h1Question.innerHTML = questions[i].question
}

 // h1Question.innerHTML = questions[i].question 

//  let answers = document.querySelectorAll(".answerButton")
//  console.log(answers)
let score = document.getElementById("scoreBoard")
let scoreNum = 0
score.innerHTML = `Score:  `

function selectAnswer(e) { 
    // console.log("selectAnswer")
    // check to see if user clicked correct answer
    e.preventDefault()
    // console.log("questions?", questions[i].answer)
    // console.log("get the innerText", e.target.innerText)
    answerButton1.disabled = true
    answerButton2.disabled = true
    answerButton3.disabled = true
    answerButton4.disabled = true
    if(e.target.innerText === questions[i].answer){
        score.innerHTML = `Score: ${scoreNum + 1} out of 20`
        scoreNum = scoreNum + 1

        console.log("scoreNum", scoreNum)
        // e.target.disabled = true
        return
    } return
}
backButton.addEventListener('click', goBack)
playButton.addEventListener('click', playGame )
answerButton1.addEventListener('click', selectAnswer)
answerButton2.addEventListener('click', selectAnswer)
answerButton3.addEventListener('click', selectAnswer)
answerButton4.addEventListener('click', selectAnswer)
nextButton.addEventListener('click', nextQuestion)






