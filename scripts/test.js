window.onload = function() {
    //timer variables
    var timer;
    var timerCount = 40;    

    //set element variable values
    var coverContainer = document.querySelector("#coverContainer");
    coverContainer.style.display  = "none";
    var startBtn = document.querySelector("#startBtn");
    var playerNameEl = document.querySelector("#playerName");
    var secondsEl = document.querySelector("#secondsReadout");
    var choiceThumbnails = document.getElementsByClassName("choiceThumbnails")
    var testBtn = document.querySelector("#testBtn");
    var questionTextEl = document.querySelector("#questionText");
    var resultsModalEl = document.querySelector("#resultsModal");
    var resultsCloseEl = document.querySelector(".closeSpan");
    

    //event listeners
    startBtn.addEventListener("click", startQuiz);
    testBtn.addEventListener("click", setQuestionCard);

    //choice thumbnails event listeners
    for (var i = 1; i < 5; i++) {
        document.getElementById("choiceThumbnail" + i).addEventListener("click", chooseAnswer);
    }

    //load question objects from questions.js
    var questions = loadQuestions();
    var activeQuestion = questions[0];
    var questionNumber = 1;
    var questionText = "";
    var rightAnswerCount = 0;
    var wrongAnswerCount = 0;
    var flashInterval;



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
        setQuestionCard(activeQuestion, questions, 1, choiceThumbnails);
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

    function setQuestionCard(question, questions, questionNumber) {        
        var question = questions[questionNumber - 1];
        questionText.textContent = question.question;

        //iterate through answers, set text in choice elements
        for (var i = 0; i < question.answerChoices.length; i++) {
            document.getElementById("choice" + (i + 1)).textContent = question.answerChoices[i];   
            
            //clear any choice thuymbnail border styling from last question
            document.getElementById("choiceThumbnail" + (i + 1)).style.border = "1px solid black";
        }

        questionNumber++;
    }

    function setNextQuesiton() {
        activeQuestion = questions[questionNumber - 1];
        questionText.textContent = activeQuestion.question;

        //iterate through answers, set text in choice elements
        for (var i = 0; i < activeQuestion.answerChoices.length; i++) {
            document.getElementById("choice" + (i + 1)).textContent = activeQuestion.answerChoices[i];   
            
            //clear any choice thuymbnail border styling from last question
            document.getElementById("choiceThumbnail" + (i + 1)).style.border = "1px solid black";
        }

        alert("setNextQuestion() has run")
    }

    //function fired by click event on choiceThumbnails
    function chooseAnswer() {
        //stopPropagation();

        //grab the p tag with the answer text
        var chosenAnswer = this.children[0].textContent;

        //if correct
        if (chosenAnswer === activeQuestion.answer) {
            //this.style.border = "2px solid green";
            rightAnswerCount++;

            flashInterval = setInterval(function(){
                clickedEl.style.border = "2px solid green";
            }, 1000);

            clearInterval(flashInterval);  

            //alert("correct");
        }
        //if incorrect 
        else {
            this.style.border = "2px solid red";
            wrongAnswerCount--;
            timerCount -= 7;
            //alert("sorry, no");
        }        

    }

    function hideContentCover() {
        coverContainer.style.display = "none";
    };

    function showContentCover() {
        coverContainer.style.display = "block";
    }
    
}
