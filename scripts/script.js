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
var resultsModalEl;
var resultsModalContentEl;
var closeResultsEl;
var playerLabelEl;

//question and quiz variables
var questions;
var activeQuestion;
var questionNumber = 0;
var questionText = ""
var rightAnswerCount = 0;
var wrongAnswerCount = 0;
var quizResultsText = "TIMES UP. YOU FAIL!!!";
var resultsModalCaptionEl;
var finishedQuiz = false;

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
    wrongCaptionEl = document.querySelector("#wrongCaption");
    resultsModalEl = document.querySelector(".resultsModal");
    resultsModalContentEl = document.querySelector("#resultsModalContent")
    closeResultsEl = document.querySelector(".closeSpan");
    resultsModalCaptionEl = document.querySelector("#quizResultsText");
    playerLabelEl = document.querySelector("#playerLabel");

    //event listeners
    startBtn.addEventListener("click", startQuiz);
    testBtn.addEventListener("click", showResultsModal);

    //choice thumbnails event listeners
    for (var i = 1; i < 5; i++) {
        document.getElementById("choiceThumbnail" + i).addEventListener("click", chooseAnswer);
    }

    //event listeners to close results modal
    resultsModalEl.addEventListener("click", function() {
        resultsModalEl.style.display = "none";
    });

    closeResultsEl.addEventListener("click", function() {
        resultsModalEl.style.display = "none";
    });

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
        if (timerCount > 0) {

            //if quiz is completed...
            if (questionNumber > questions.length)
            {
                finishedQuiz = true;                
                clearInterval(timer);
                endQuiz();
            }
        }

        //if time runs out...
        if (timerCount === 0) {
            clearInterval(timer);            
            endQuiz();              
        }
    }, 1000);

    changeElementVisibility(coverContainer, "block");
}

function endQuiz() {
    if (finishedQuiz) {
        quizResultsText = "Nice job! you got " + rightAnswerCount + " questions right and completed the quis in " 
        + secondsEl.textContent + " seconds. Check out the highscore page to see your ranking.";
    }

    showResultsModal(quizResultsText);
    changeElementVisibility(coverContainer, "none");
}

function setNextQuesiton() {
    //update header displays
    rightCaptionEl.textContent = rightAnswerCount;
    wrongCaptionEl.textContent = wrongAnswerCount;

    questionNumber++;

    //if last question, exit function
    if (questionNumber > questions.length) {
        return;
    }

    activeQuestion = questions[questionNumber - 1];
    questionTextEl.textContent = activeQuestion.question;

    //iterate through answers, set text in choice elements
    for (var i = 0; i < activeQuestion.answerChoices.length; i++) {
        document.getElementById("choice" + (i + 1)).textContent = activeQuestion.answerChoices[i];
    }
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
        //decrement time for wrong answer
        timerCount -= 7;
        setNextQuesiton();
    }        

}

function showResultsModal(message) {
    resultsModalCaptionEl.textContent = message;
    resultsModalEl.style.display = "block";
    resultsModalContentEl.style.display = "block";
}

function hideContentCover() {
    coverContainer.style.display = "none";
};

function showContentCover() {
    coverContainer.style.display = "block";
}

function changeElementVisibility(el, displayStyle) {
    el.style.display = displayStyle;
}


