//timer variables
var timer;
var timerCount = 40;

//element variable values
var coverContainer;
var startBtn;
var playerNameEl;
var secondsEl;
var testBtn;
var questionTextEl;
var rightCaptionEl;
var wrongCaptionEl;

//question and quiz variables
var questions;
var activeQuestion;
var questionNumber = 0;
var questionText = ""
var rightAnswerCount = 0;
var wrongAnswerCount = 0;
var flashInterval;

//makes sure window has loaded before accessing elements
window.onload = function() {

    //set element variable values
    coverContainer = document.querySelector("#coverContainer");
    coverContainer.style.display  = "none";
    startBtn = document.querySelector("#startBtn");
    playerNameEl = document.querySelector("#playerName");
    secondsEl = document.querySelector("#secondsReadout");
    choiceThumbnails = document.getElementsByClassName("choiceThumbnails")
    testBtn = document.querySelector("#testBtn");
    questionTextEl = document.querySelector("#questionText");
    rightCaptionEl = document.querySelector("#rightCaption");
    wrongCaptionEl = document.querySelector("#wrongCaption")

    //event listeners
    startBtn.addEventListener("click", startQuiz);
    testBtn.addEventListener("click", setNextQuesiton);

    //choice thumbnails event listeners
    for (var i = 1; i < 5; i++) {
        document.getElementById("choiceThumbnail" + i).addEventListener("click", chooseAnswer);
    }

    //load question objects from questions.js
    questions = loadQuestions();
    activeQuestion = questions[0];
    
}

//functions
//player name set localstorage logic and ui changes to start quiz. calls main 'runQuiz' function 
function startQuiz() {

    //get player name from localstorage, prompt and set if none exists
    var playerName = localStorage.getItem("playerName");
    if (playerName !== null){
        playerNameEl.innerHTML = playerName;
        //if not, ask user for value
    } else {
        if (playerName === null || playerName === "") {
            //prompt user to enter playerName
            playerName = prompt("enter your name for the leaderboard");  
            if (playerName === null || playerName === "") {
                alert("name value is required to take the quiz")
                //leave function if no valid name is entered
                return;
            } else {
                localStorage.setItem("playerName", playerName);
                playerNameEl.innerHTML = playerName;                    
            }
        }
    }

    //set first question object and start the quiz
    setNextQuesiton();
    hideContentCover();
    runQuiz()      
}

//main quiz attempt function w/ timer
function runQuiz() {
    timer = setInterval(function() {
        timerCount--;
        secondsEl.textContent = timerCount;

        //quiz logic
        if (timerCount >= 0) {

            ////iterate through question objects
            
            //while (questionNumber < questions.length) {

            //}

            //if quiz is completed...

        }

        //if time runs out...
        if (timerCount === 0) {
            clearInterval(timer);              
        }
    }, 1000);

    showContentCover();
}

function setNextQuesiton() {
    questionNumber++;
    activeQuestion = questions[questionNumber - 1];
    questionTextEl.textContent = activeQuestion.question;

    //iterate through answers, set text in choice elements
    for (var i = 0; i < activeQuestion.answerChoices.length; i++) {
        document.getElementById("choice" + (i + 1)).textContent = activeQuestion.answerChoices[i];   
        
        //clear any choice thuymbnail border styling from last question
        document.getElementById("choiceThumbnail" + (i + 1)).style.border = "1px solid black";
    }

    //update header displays
    rightCaptionEl.textContent = rightAnswerCount;
    wrongCaptionEl.textContent = wrongAnswerCount;
}

//function fired by click event on choiceThumbnails
function chooseAnswer() {

    //grab the p tag with the answer text
    var chosenAnswer = this.children[0].textContent;

    //if correct
    if (chosenAnswer === activeQuestion.answer) {
        rightAnswerCount++;
        setNextQuesiton();
    }
    //if incorrect 
    else {
        wrongAnswerCount++; 
        timerCount -= 7;
        setNextQuesiton();
    }        

}

function hideContentCover() {
    coverContainer.style.display = "none";
};

function showContentCover() {
    coverContainer.style.display = "block";
}

function updateControlBox() {

}

// function flashBorder(clickedEl) {
//     flashInterval = setInterval(function(){
//         clickedEl.style.border = "2px solid red";
//     }, 1000);

//     clearInterval(flashInterval);                    
// }

// //        clickedEl.style.border = "1px solid black";
