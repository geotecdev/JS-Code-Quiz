window.onload = function() {
    //timer variables
    var timer;
    var timerCount;

    //set element variable values
    var coverContainer = document.querySelector("#coverContainer");
    coverContainer.style.display  = "none";
    var startBtn = document.querySelector("#startBtn");
    var playerNameEl = document.querySelector("#playerName");

    //event listeners
    startBtn.addEventListener("click", startQuiz);


    //functions

    //player name set localstorage logic and ui changes to start quiz. calls main 'quizAttempt' function 
    function startQuiz() {
        var playerName = localStorage.getItem("playerName");
        if (playerName !== null){
            playerNameEl.innerHTML = playerName;
        } else {
            if (playerName === null || playerName === "") {
                playerName = prompt("enter your name for the leaderboard");  
                if (playerName === null || playerName === "") {
                    alert("name value is required to take the quiz")
                    return;
                } else {
                    localStorage.setItem("playerName", playerName);
                    playerNameEl.innerHTML = playerName;                    
                }
            }
        }

        //start quiz
        hideContentCover();
        timerCount = 35;
        startTimer()      
    }

    function startTimer() {
        
    }

    function hideContentCover() {
        coverContainer.style.display = "block";
    };

    function showContentCover() {
        coverContainer.style.display = "none";
    }

}
